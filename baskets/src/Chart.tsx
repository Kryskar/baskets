import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "./App";
import { StyledDiv } from "./components/StyledDashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chart() {
  const { state: basket }: { state: Product[] } = useLocation();
  console.log(basket);
  const navigate = useNavigate();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = basket.map((product) => product.title);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: basket.map((product) => product.price),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Discounted Price",
        data: basket.map((product) => product.discountedPrice),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <StyledDiv>
      <div
        style={{
          width: "1200px",
          backgroundColor: "#ececf3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Line options={options} data={data} />{" "}
        <button onClick={() => navigate("/")}>home</button>
      </div>
    </StyledDiv>
  );
}
