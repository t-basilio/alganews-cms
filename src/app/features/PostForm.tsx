import styled from "styled-components";
import Loading from "../components/Loading";
import Input from "../components/Input/Input";
import ImageUpload from "../components/ImageUpload";
import MarkDownEditor from "../components/MarkdownEditor/MarkdownEditor";
import TagInput from "../components/TagInput";
import { useEffect, useState } from "react";
import { Tag } from "react-tag-input";
import WordPriceCounter from "../components/WordPriceCounter";
import Button from "../components/Button/Button";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import PostService from "../../sdk/services/Post.service";
import { useHistory } from "react-router-dom";


interface PostFormProps {
  postId?: number
}

export default function PostForm(props: PostFormProps) {
  const history = useHistory()

  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [publishing, setPublishing] = useState(false);

  const newPost = {
    body,
    title,
    imageUrl,
    tags: tags.map((tag) => tag.text),
  };

  async function insertNewPost() {
    await PostService.insertNewPost(newPost);
    return 'salvo'
  }

  async function updateExistingPost(postId: number) {
    await PostService.updateExistingPost(postId, newPost)
    return 'atualizado'
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      setPublishing(true);
      e.preventDefault();
      
      const action = props.postId
        ? await updateExistingPost(props.postId)
        : await insertNewPost();

      info({
        title: `Post ${action} com sucesso`,
        description: `Seu post acabou de ser ${action}`,
      });

      history.push('/')
     
    } finally {
      setPublishing(false);
    }
  }

  function fetchPost(postId: number) {
    PostService
      .getExistingPost(postId)
      .then(post => {
        setTitle(post.title)
        setImageUrl(post.imageUrls.default)
        setBody(post.body)
        setTags(post.tags.map(tag => ({id: tag, text: tag})))
    })
  }

  useEffect(() => {

    if (props.postId)
      fetchPost(props.postId)

  },[props.postId])

  return (
    <PostFormWrapper onSubmit={handleFormSubmit}>
      <Loading show={publishing} />

      <Input
        label="título"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        placeholder="e.g.: Como fiquei rico apredendo React"
      />

      <ImageUpload
        onImageUpload={setImageUrl}
        label="Thumbnail do post"
        preview={imageUrl}
      />
      <MarkDownEditor
        onChange={setBody}
        value={body}
      />
      
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
        <Button
          option="primary"
          label={"Salvar post"}
          type="submit"
          disabled={ !title || !imageUrl || !body || !tags.length} />
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
