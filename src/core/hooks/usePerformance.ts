import { useCallback, useState } from "react";
import { MetricService } from "t-basilio-sdk";
import transformEditorMonthlyEarningsToChartJs from "../utils/transformEditorMonthlyEarningsToChartJs";
import { ChartProps } from "../../app/components/Chart/Chart";


export default function usePerformance() {
    const [performance, setPerformance] = useState<ChartProps["data"]>();

    const fetchPerformance = useCallback(async function () {
        MetricService.getEditorMonthlyEarnings()
          .then(transformEditorMonthlyEarningsToChartJs)
          .then(setPerformance);
    }, [])

    return {
        performance,
        fetchPerformance
    }
}