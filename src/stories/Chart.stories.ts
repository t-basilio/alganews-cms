import type { Meta, StoryObj } from "@storybook/react";
import Chart from "../app/components/Chart/Chart";


const data: Chart.ChartData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Receitas",
      data: [500, 400, 600, 100, 800, 20],
      fill: true,
      backgroundColor: "#09f",
      borderColor: "transparent",
      yAxisID: "cashFlow",
    },
    {
      label: "Despesas",
      data: [100, 200, 250, 500, 1000, 600],
      fill: true,
      backgroundColor: "#274060",
      borderColor: "#274060",
      borderWidth: 0.5,
      yAxisID: "cashFlow",
    },
  ],
};


const meta = {
  title: "Example/Chart",

  component: Chart,
  tags: ["autodocs"],
  //argTypes: {
  //backgroundColor: { control: 'color' },
  //},
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutData: Story = {
  args: {
    title: "Média de performance nos últimos 12 meses"
  }
};


export const Default: Story = {
  args: {
    title: 'Média de performance nos últimos 6 meses',
    data
  }
};

