import { useEffect, useState } from "react";
import Chart, { ChartProps } from "../components/Chart/Chart";
import MetricService from "../../sdk/services/Metric.service";
import transformEditorMonthlyEarningsToChartJs from "../../core/utils/transformEditorMonthlyEarningsToChartJs";
import withBoundary from "../../core/hoc/withBoundary";

function UserPerformance() {

  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()
  const [error, setError] = useState<Error>()
  
  useEffect(() => {
    MetricService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsToChartJs)
      .then(setEditorEarnings)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, [])
  
  if (error)
    throw error

  if(!editorEarnings)
    return null

  return (
    <Chart title="Média de perfromance dos últimos 12 meses" data={editorEarnings} />
  );
}

export default withBoundary(UserPerformance, 'performance')
