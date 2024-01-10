"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  yAxis: [
    {
      label: "Keluar Masuk Barang",
    },
  ],
  xAxis: [
    {
      scaleType: "band",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ],
    },
  ],
  width: 500,
  height: 300,
};

export default function Chart({
  data = new Array(12).fill({ masuk: 0, keluar: 0 }),
}) {
  const dataset = data;

  return (
    <BarChart
      dataset={dataset}
      series={[
        { dataKey: "masuk", label: "Barang Masuk", color: '#76b7b2' },
        { dataKey: "keluar", label: "Barang Keluar", color: '#e15759' },
      ]}
      {...chartSetting}
    />
  );
}
