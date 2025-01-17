import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Container } from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalBar(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  props.infoData.sort((a, b) => {
    const stateA = a.state.toLowerCase();
    const stateB = b.state.toLowerCase();

    if (stateA < stateB) {
      return -1;
    }
    if (stateA > stateB) {
      return 1;
    }
    return 0;
  });

  const labels = props.infoData.map((item) => item.state);

  const data = {
    labels,
    datasets: [
      {
        label: "Quantidade de escola por estado",
        data: props.infoData.map((item) => item.count),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Container>
      <h1>Escolas Participantes: {props.totalCount}</h1>
      <Bar options={options} data={data} />
    </Container>
  );
}
