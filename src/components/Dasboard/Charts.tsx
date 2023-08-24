import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import Map from "./Map";


interface HistoricalData {
  cases: Record<string, number>;
}

const Dashboard: React.FC = () => {
  
  const { data: historicalData } = useQuery<HistoricalData>(
    "historicalData",
    async () => {
      const response = await axios.get<HistoricalData>(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      return response.data;
    }
  );

  const chartData = {
    labels: historicalData ? Object.keys(historicalData.cases) : [],
    datasets: [
      {
        label: "cases",
        data: historicalData ? Object.values(historicalData.cases) : [],
        fill: true,
        borderColor: "blue",
      },
    ],
  };

  useEffect(() => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  return (
    <div className="w-full pt-20 px-4 pb-8">
       <h2 className="text-xl text-white font-bold mb-4">
        <div
          className="rounded-sm shadow shadow-slate-700 bg-blue-600 p-3 text-xl"
          style={{ marginTop: `${14}px` }}
        >
          Corona Cases World Map
        </div>
      </h2>
      <div className=" w-10/11 m-auto pb-5">
          <Map/>
      </div> 
      <h2 className="text-2xl text-white font-bold mb-4">
        <div className="rounded-sm shadow shadow-slate-700 bg-blue-600 p-3 text-2xl">
          Corona Cases Line Graph
        </div>
      </h2>

      <div className=" flex justify-center w-10/11  m-auto 10 auto 10">
        {chartData.labels.length > 0 ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-pink-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>  
    </div>
  );
};

export default Dashboard;
