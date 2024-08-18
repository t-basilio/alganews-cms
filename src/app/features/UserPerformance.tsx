import Chart from "../components/Chart/Chart";

const FAKE_DATA: Chart.ChartData = {
  labels: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outrubro",
    "Novembro",
    "Dezembro",
  ],
  datasets: [
    {
      label: "Receitas",
      data: [500, 400, 600, 100, 800, 20, 123, 320, 120, 500, 434, 322],
      fill: true,
      backgroundColor: "#09f",
      borderColor: "transparent",
      borderWidth: 0.5,
      yAxisID: "cashFlow",
    },
    {
      label: "Despesas",
      data: [100, 200, 250, 500, 1000, 600, 123, 210, 344, 800, 123, 0],
      fill: true,
      backgroundColor: "#274060",
      borderColor: "#274060",
      borderWidth: 0.5,
      yAxisID: "cashFlow",
    },
  ],
};

export default function UserMetrics() {
  return (
    <Chart title="Média de perfromance dos últimos 12 meses" data={FAKE_DATA} />
  );
}
