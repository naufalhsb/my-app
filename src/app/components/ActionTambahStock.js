"use server";
import { PrismaClient } from "@prisma/client";

export async function ActionTambahStock(prevState, formData) {
  const prisma = new PrismaClient();
  prisma.$transaction([
    prisma.log_stock.create({
      data: {
        post_id: parseInt(formData.get("id")),
        tanggal: new Date(formData.get("tanggal")).toISOString(),
        jumlah: parseInt(formData.get("tambah_stock")),
      },
    }),
    prisma.post.update({
      where: {
        id: parseInt(formData.get("id")),
      },
      data: {
        stock: {
          increment: parseInt(formData.get("tambah_stock")),
        },
      },
    }),
  ]);
}
