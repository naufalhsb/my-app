"use server";
import { PrismaClient } from "@prisma/client";

export async function Action(prevState, formData) {
  const prisma = new PrismaClient();
  await prisma.post.create({
    data: {
      nama_barang: formData.get("nama_barang"),
      merek: formData.get("merek"),
      jumlah: parseInt(formData.get("jumlah")),
      deskripsi: "",
      adminId: 2,
    },
  });
}
