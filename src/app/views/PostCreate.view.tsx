import UsePageTitle from "../../core/hooks/UsePageTitle";
import PostForm from "../features/PostForm";
import DefaultLayout from "../layouts/Default/Default.layout";

export default function PostCreateView() {
  UsePageTitle("Novo post");
  return (
    <DefaultLayout>
      <PostForm />
    </DefaultLayout>
  );
}
