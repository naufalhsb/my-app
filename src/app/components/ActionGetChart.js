"use server";
import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

export async function ActionGetChart(year) {
  const prisma = new PrismaClient();
  // Inisialisasi array hasil dengan panjang 12 dan nilai awal 0
  const resultArray = Array.from({ length: 12 }, () => [0, 0]);

  // Iterasi untuk setiap bulan
  for (let i = 0; i < 12; i++) {
    // Menghitung jumlah data untuk bulan tertentu
    const result_masuk = await prisma.log_stock.aggregate({
      _sum: {
        jumlah: true,
      },
      where: {
        jumlah: {
            gte: 0
        },
        tanggal: {
          gte: dayjs().year(year).date(0).add(i, "month").toISOString(),
          lt: dayjs().year(year).date(0).add(i + 1, "month").toISOString(),
        },
      },
    });
    const result_keluar = await prisma.log_stock.aggregate({
      _sum: {
        jumlah: true,
      },
      where: {
        jumlah: {
            lt: 0
        },
        tanggal: {
          gte: dayjs().year(year).date(0).add(i, "month").toISOString(),
          lt: dayjs().year(year).date(0).add(i + 1, "month").toISOString(),
        },
      },
    });

    // Menyimpan hasil ke dalam array
    resultArray[i] = {masuk: result_masuk._sum.jumlah ?? 0, keluar: result_keluar._sum.jumlah ? result_keluar._sum.jumlah * -1 : 0};
  }
  return resultArray;
}
