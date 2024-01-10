import { Box } from "@mui/material";
import Chart from "../components/Chart";
import CustomYearPicker from "../components/CustomYearPicker";
import { ActionGetChart } from "../components/ActionGetChart";

export default async function ChartPage({ searchParams }) {
  const year = searchParams?.year ?? new Date().getFullYear();
  const data_chart = await ActionGetChart(year);
  return (
    <Box padding={3}>
      <CustomYearPicker defaultValue={year} />
      <Chart data={data_chart} />
    </Box>
  );
}
