import React, { useRef, useEffect } from "react";
import BarLog from "../bar/BarLog";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const chartRef = useRef(null);

  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Data Series',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const lineChartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        min: 0,
      },
    },
  };

  useEffect(() => {
    // Si hay un gráfico de barras existente, destrúyelo antes de renderizar uno nuevo
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Renderiza el nuevo gráfico de barras
    const barCtx = document.getElementById("barChart").getContext("2d");
    chartRef.current = new Chart(barCtx, {
      type: "bar",
      data: barChartData,
    });

    // No es necesario destruir el gráfico de líneas si usas react-chartjs-2
  }, [barChartData]);

  return (
    <div>
      <BarLog />
      <div className="container mt-4">
        <h1 className="text-left" style={{ color: "#800080" }}>
          Análisis de datos
        </h1>
        <div className="row mt-4">
          <div className="col-6">
            <div>
              {/* Agrega un ID al canvas para referencia */}
              <canvas id="barChart" width="400" height="400"></canvas>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div>
              {/* Agrega un ID al canvas para referencia */}
              
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;