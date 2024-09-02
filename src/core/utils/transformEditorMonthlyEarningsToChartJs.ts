import { ChartProps } from "../../app/components/Chart/Chart";
import { Metric } from "t-basilio-sdk";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'

function transformEditorMonthlyEarningsToChartJs(
  editorEarnings: Metric.EditorMonthlyEarnings): ChartProps['data'] {
  
    const labels: string[] = []
    const data1: number[] = []
    const data2: number[] = [];

  editorEarnings.forEach(earning => {
    const formattedMonth = format(new Date(earning.yearMonth), 'MMMM',
      { locale: ptBR });

        labels.push(formattedMonth)
        data1.push(earning.totalAmount)
        data2.push(earning.totalPlatformAverageAmount)
    })

    return {
      labels,
      datasets: [
        {
          label: "Performance pessoal",
          data: data1,
          fill: true,
          backgroundColor: "#09f",
          borderColor: "transparent",
          borderWidth: 0.5,
        },
        {
          label: "Performance média do time",
          data: data2,
          fill: true,
          backgroundColor: "#274060",
          borderColor: "#274060",
          borderWidth: 0.5,
        },
      ],
    };
}

export default transformEditorMonthlyEarningsToChartJs