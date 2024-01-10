"use server";
import { PrismaClient } from "@prisma/client";

export async function ActionUpdate(prevState, formData) {
  const prisma = new PrismaClient();
  await prisma.post.update({
    where: {
      id: parseInt(formData.get("id")),
    },
    data: {
      barang: formData.get("barang"),
      tanggal: new Date(formData.get("tanggal")).toISOString(),
      adminId: 1,
    },
  });
}
