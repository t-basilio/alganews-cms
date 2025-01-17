import Icon from "@mdi/react";
import * as UI from "./ImageUpload.styles";
import { mdiDelete, mdiUpload } from "@mdi/js";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../Button/Button";
import Loading from "../Loading";
import services from "t-basilio-sdk";

export interface ImageUploadProps {
  label: string;
  onImageUpload: (imageUrl: string) => any;
  preview?: string
}

function ImageUpload(props: ImageUploadProps) {

  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);
  const [pushing, setPushing] = useState(false);
  
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", async (e) => {
        try {
          setPushing(true);
          setFilePreview(String(e.target?.result));
          const imageUrl = await services.services.FileService.upload(file);

          props.onImageUpload(imageUrl);
        } finally {
          setPushing(false);
        }
      })
      reader.readAsDataURL(file);
    }

  }

  useEffect(() => {
    
    setFilePreview(props.preview)

  }, [props.preview])

  if (filePreview) {
    return (
      <UI.ImagePreviewWrapper>
        <Loading show={pushing} />
        <UI.ImagePreview preview={filePreview}>
          <Button
            option={"primary"}
            label={
              <div>
                Remover imagem
                <Icon size={"24px"} path={mdiDelete} color={"#274060"} />
              </div>
            }
            onClick={() => {
              setFilePreview(undefined)
              props.onImageUpload('')
            }
            }
          />
        </UI.ImagePreview>
      </UI.ImagePreviewWrapper>
    );
  }
  return (
    <UI.Wrapper>
      <Loading show={pushing} />
      
      <UI.Label>
        <Icon size={"24px"} path={mdiUpload} />

        {props.label}
        <UI.Input type="file" onChange={ handleChange } />
      </UI.Label>
    </UI.Wrapper>
  );
}

export default ImageUpload;
