"use client";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { usePathname, useRouter } from "next/navigation";

export default function CustomYearPicker({
  defaultValue = new Date().getFullYear(),
}) {
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(newValue) {
    const url = pathname + "?year=" + newValue.format("YYYY");
    router.push(url);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Pilih Tahun"
        views={["year"]}
        defaultValue={dayjs().year(defaultValue)}
        onChange={(newValue) => handleChange(newValue)}
      />
    </LocalizationProvider>
  );
}
