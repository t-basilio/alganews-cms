import { useParams } from "react-router-dom";
import UsePageTitle from "../../core/hooks/UsePageTitle";
import PostForm from "../features/PostForm";
import DefaultLayout from "../layouts/Default/Default.layout";

export default function PostEditView() {

  const params = useParams<{id: string}>()

  UsePageTitle("Novo post");

  return (
    <DefaultLayout>
      <PostForm postId={Number(params.id)}/>
    </DefaultLayout>
  );
}
