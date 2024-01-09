"use server";
import { PrismaClient } from "@prisma/client";

export async function Action(prevState, formData) {
  const prisma = new PrismaClient();
  await prisma.post.create({
    data: {
      barang: formData.get("barang"),
      jumlah: formData.get("jumlah"),
      tanggal: new Date(formData.get("tanggal")).toISOString(),
      adminId: 1,
    },
  });
}
