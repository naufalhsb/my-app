"use server";
import { PrismaClient } from "@prisma/client";

export async function Action(prevState, formData) {
  const prisma = new PrismaClient();
  await prisma.post.create({
    data: {
      barang: formData.get("barang"),
      jumlah: parseInt(formData.get("jumlah")),
      tanggal: formData.get("tanggal"),
      adminId: 1,
    },
  });
}
