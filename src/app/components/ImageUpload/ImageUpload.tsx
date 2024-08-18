import Icon from "@mdi/react";
import * as UI from "./ImageUpload.styles";
import { mdiDelete, mdiUpload } from "@mdi/js";
import { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import FileService from "../../../sdk/services/File.service";

export interface ImageUploadProps {
  label?: string;
  onImageUpload: (imageUrl: string) => any
}

function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", async e => {
        setFilePreview(String(e.target?.result));
         
        const imageUrl = await FileService.upload(file)
        props.onImageUpload(imageUrl)
      });

      reader.readAsDataURL(file);
    }
  }

  if (filePreview) {
    return (
      <UI.ImagePreviewWrapper>
        <UI.ImagePreview preview={filePreview}>
          <Button
            variant={"primary"}
            label={
              <div>
                Remover imagem
                <Icon size={"24px"} path={mdiDelete} color={"#274060"} />
              </div>
            }
            onClick={() => setFilePreview(null)}
          />
        </UI.ImagePreview>
      </UI.ImagePreviewWrapper>
    );
  }

  return (
    <UI.Wrapper>
      <UI.Label>
        <Icon size={"24px"} path={mdiUpload} />

        {props.label}
        <UI.Input type="file" onChange={handleChange} />
      </UI.Label>
    </UI.Wrapper>
  );
}

export default ImageUpload;
