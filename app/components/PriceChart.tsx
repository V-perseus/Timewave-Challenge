import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
  TimeSeriesScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import {
  ApiResponse,
  PricePoint,
  TokenDetailedPrices,
  TokenPrices,
} from "../lib/types";
import { chartOptions } from "../lib/helper";
import LoadingGIF from "@/public/images/Loading Gif.gif";
import Image from "next/image";
import { atomToken, query } from "../lib/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
  TimeSeriesScale
);

const PriceChart: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [atomData, setAtomData] = useState<PricePoint[]>([]);
  const [ntrnData, setNtrnData] = useState<PricePoint[]>([]);
  const [prices, setPrices] = useState<TokenPrices>({
    atom: {
      averagePrice: 0,
      minPrice: 0,
      maxPrice: 0,
    },
    ntrn: {
      averagePrice: 0,
      minPrice: 0,
      maxPrice: 0,
    },
  });

  const updatePrices = useCallback(
    (atomData: PricePoint[], ntrnData: PricePoint[]) => {
      const calculatePrices = (data: PricePoint[]) => {
        const averagePrice =
          data.reduce((acc, cur) => acc + cur.value, 0) / data.length;
        const minPrice = Math.min(...data.map((point) => point.value));
        const maxPrice = Math.max(...data.map((point) => point.value));
        return { averagePrice, minPrice, maxPrice };
      };

      setPrices({
        atom: calculatePrices(atomData),
        ntrn: calculatePrices(ntrnData),
      });
    },
    []
  );

  const calculateRatios = (atomData: PricePoint[], ntrnData: PricePoint[]) => {
    return atomData
      .map((atomPoint, index) => {
        const ntrnPoint = ntrnData[index];
        if (atomPoint.time === ntrnPoint.time) {
          return {
            time: atomPoint.time,
            ratio: atomPoint.value / ntrnPoint.value,
          };
        }
        return null;
      })
      .filter((point) => point !== null);
  };

  const ratioData = useMemo(
    () => calculateRatios(atomData, ntrnData),
    [atomData, ntrnData]
  );

  const chartData = useMemo(
    () => ({
      labels: atomData.map(
        (point) => new Date(point.time * 1000).toISOString().split("T")[0]
      ),
      datasets: [
        {
          label: "$ATOM Price",
          data: atomData.map((point) => point.value),
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.1,
          yAxisID: "y",
        },
        {
          label: "$NTRN Price",
          data: ntrnData.map((point) => point.value),
          fill: true,
          borderColor: "rgb(192, 75, 75)",
          backgroundColor: "rgba(192, 75, 75, 0.2)",
          tension: 0.1,
          yAxisID: "y",
        },
        {
          label: "$ATOM/$NTRN Ratio",
          data: ratioData.map((point) => point?.ratio),
          fill: true,
          borderColor: "rgb(75, 75, 192)",
          backgroundColor: "rgba(75, 75, 192, 0.2)",
          tension: 0.1,
          yAxisID: "y1",
        },
      ],
    }),
    [atomData, ntrnData, ratioData]
  );

  const fetchData = async () => {
    const url = `https://app.astroport.fi/api/trpc/charts.prices?input=${JSON.stringify(
      query
    )}`;
    try {
      const response = await fetch(url);

      const json: ApiResponse = await response.json();
      console.log(json);
      const atomSeries = json.result.data.json[atomToken].series;
      const untrnSeries = json.result.data.json["untrn"].series;
      setAtomData(atomSeries);
      setNtrnData(untrnSeries);
      updatePrices(atomSeries, untrnSeries);
    } catch (error) {
      console.error("Failed to fetch price data", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <div className="w-full h-[400px] flex flex-row justify-center items-center mb-12">
          <Image src={LoadingGIF} alt="loading-gif" />
        </div>
      ) : (
        <div className="w-full h-[400px] mb-12">
          <Line data={chartData} options={chartOptions as any} />
        </div>
      )}
      <div className="flex flex-row justify-around">
        <PriceInfo title="$ATOM" prices={prices.atom} />
        <PriceInfo title="$NTRN" prices={prices.ntrn} />
      </div>
    </div>
  );
};

export default PriceChart;

const PriceInfo = ({
  title,
  prices,
}: {
  title: string;
  prices: TokenDetailedPrices;
}) => (
  <div>
    <h3 className=" text-amber-700 text-2xl">{title}</h3>
    <p className=" text-emerald-600">
      <span className="text-neutral-900">Average Price</span>: $
      {prices.averagePrice.toFixed(2)}
    </p>
    <p className=" text-emerald-600">
      <span className="text-neutral-900">Min Price</span>: $
      {prices.minPrice.toFixed(2)}
    </p>
    <p className=" text-emerald-600">
      <span className="text-neutral-900">Max Price</span>: $
      {prices.maxPrice.toFixed(2)}
    </p>
  </div>
);
