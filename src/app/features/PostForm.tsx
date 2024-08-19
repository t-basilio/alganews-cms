import styled from "styled-components";
import Input from "../components/Input/Input";
import ImageUpload from "../components/ImageUpload";
import MarkDownEditor from "../components/MarkdownEditor/MarkdownEditor";
import TagInput from "../components/TagInput";
import { useState } from "react";
import { Tag } from "react-tag-input";
import WordPriceCounter from "../components/WordPriceCounter";
import Button from "../components/Button/Button";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import PostService from "../../sdk/services/Post.service";

export default function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newPost = {
      body,
      title,
      tags: tags.map((tag) => tag.text),
      imageUrl,
    };

    const insertedPost = await PostService.insertNewPost(newPost);

    info({
      title: "Post salvo com sucesso",
      description: "Você acabou de criar o post com o id " + insertedPost.id,
    });
  }

  return (
    <PostFormWrapper onSubmit={handleFormSubmit}>
      <Input
        label="título"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        placeholder="e.g.: Como fiquei rico apredendo React"
      />

      <ImageUpload onImageUpload={setImageUrl} label="Thumbnail do post" />
      <MarkDownEditor onChange={setBody} />
      <TagInput
        tags={tags}
        onAdd={(tag) => setTags([...tags, tag])}
        onDelete={(index) => setTags(tags.filter((_, i) => i !== index))}
        placeholder="Insira as tags deste post"
      />
      <PostFormSubmitWrapper>
        <WordPriceCounter
          pricePerWord={0.1}
          wordsCount={countWordsInMarkdown(body)}
        />
        <Button option="primary" label={"Salvar post"} type="submit" />
      </PostFormSubmitWrapper>
    </PostFormWrapper>
  );
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
