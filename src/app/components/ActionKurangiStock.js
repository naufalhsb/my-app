"use server";
import { PrismaClient } from "@prisma/client";

export async function ActionKurangiStock(prevState, formData) {
  const prisma = new PrismaClient();
  prisma.$transaction([
    prisma.log_stock.create({
      data: {
        post_id: parseInt(formData.get("id")),
        tanggal: new Date(formData.get("tanggal")).toISOString(),
        jumlah: parseInt(formData.get("kurangi_stock")) > 0 ? parseInt(formData.get('kurangi_stock')) * -1 : parseInt(formData.get("kurangi_stock")),
      },
    }),
    prisma.post.update({
      where: {
        id: parseInt(formData.get("id")),
      },
      data: {
        stock: {
          decrement: parseInt(formData.get("kurangi_stock")),
        },
      },
    }),
  ]);
}
