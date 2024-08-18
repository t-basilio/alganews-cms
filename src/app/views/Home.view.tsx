import UsePageTitle from "../../core/hooks/UsePageTitle";
import PostList from "../features/PostList";
import UserEarnings from "../features/UserEarnings";
import UserMetrics from "../features/UserPerformance";
import UserTopTags from "../features/UserTopTags";
import DefaultLayout from "../layouts/Default/Default.layout";

export default function Home() {
  UsePageTitle("Home");

  return (
    <DefaultLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 32,
        }}
      >
        <UserTopTags />
        <UserEarnings />
      </div>
      <UserMetrics />
      <PostList />
    </DefaultLayout>
  );
}
