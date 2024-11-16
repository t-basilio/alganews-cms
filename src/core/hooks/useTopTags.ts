import { Metric, MetricService } from "t-basilio-sdk";
import { useCallback, useState } from "react";

export default function useTopTags() {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([]);

  const fetchTopTags = useCallback(async function () {
    MetricService.getTop3Teags().then(setTopTags);
  }, []);

  return {
    fetchTopTags,
    topTags,
  };
}
