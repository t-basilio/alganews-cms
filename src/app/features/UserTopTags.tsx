import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styled from "styled-components";
import CircleChart from "../components/CircleChart";
import { useEffect } from "react";
import withBoundary from "../../core/hoc/withBoundary";
import useUserTopTags from "../../core/hooks/useTopTags";

function UserTopTags() {
  const { topTags, fetchTopTags } = useUserTopTags();
  
  useEffect(() => {
    fetchTopTags()
  }, [fetchTopTags]);

  if (!topTags.length)
    return (
      <UserTopTagsWrapper>
        <Skeleton height={88} width={88} circle />
        <Skeleton height={88} width={88} circle />
        <Skeleton height={88} width={88} circle />
      </UserTopTagsWrapper>
    );

  return (
    <UserTopTagsWrapper>
      {topTags.map((tag, i) => {
        return (
          <CircleChart
            key={i}
            level={tag.percentage}
            caption={tag.tagName}
            theme={i === 0 ? "primary" : "default"}
            size={88}
          />
        );
      })}
    </UserTopTagsWrapper>
  );
}

export default withBoundary(UserTopTags, "top tags");

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
