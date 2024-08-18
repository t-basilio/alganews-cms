import { transparentize } from "polished";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import Heading from "../Typography/Heading";
import NoData from "../NoData/NoData";

const options: Chart.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0,
    },
  },
  legend: {
    display: true,
    position: "bottom",
    align: "center",
    labels: {
      usePointStyle: true,
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        type: "linear",
        display: false,
        position: "left",
        id: "cashFlow",
      },
    ],
  },
};

export interface ChartProps {
  data?: Chart.ChartData;
  title: string
}

export default function Chart({ title, data }: ChartProps) {
  return (
    <ChartWrapper style={{ width: "100%"}}>
      <div style={{ marginBottom: 16 }}>
        <Heading level={3}>
          { title }
        </Heading>
      </div>
      {data ? (
        <Line
          type="line"
          height={139}
          width={600}
          data={data}
          options={options}
        />
      ) : (
        <NoData height={139}/>
      )}
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  text-align: center;
  border: 1px solid ${transparentize(0.95, "#274060")};
  padding: 20px;
`;
