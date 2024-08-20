import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styled from "styled-components";
import CircleChart from "../components/CircleChart";
import { useEffect, useState } from "react";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import withBoundary from "../../core/hoc/withBoundary";

function UserTopTags() {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getTop3Teags()
      .then(setTopTags)
      .catch((error) => setError(new Error(error.message)));
  }, []);

  if (!topTags.length)
    return (
      <UserTopTagsWrapper>
        <Skeleton height={88} width={88} circle />
        <Skeleton height={88} width={88} circle />
        <Skeleton height={88} width={88} circle />
      </UserTopTagsWrapper>
    );

  if (error) throw error;

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
