"use server";
import { PrismaClient } from "@prisma/client";

export async function Action(prevState, formData) {
  const prisma = new PrismaClient();
  const barang = await prisma.post.create({
    data: {
      barang: formData.get("barang"),
      stock: parseInt(formData.get("stock")),
      tanggal: new Date(formData.get("tanggal")).toISOString(),
      adminId: 1,
    },
  });

  await prisma.log_stock.create({
    data: {
      post_id: barang.id,
      tanggal: new Date(formData.get("tanggal")).toISOString(),
      jumlah: parseInt(formData.get("stock"))
    }
  })
}
