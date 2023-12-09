"use server";
import { PrismaClient } from "@prisma/client";

export async function ActionDelete(prevState, formData) {
  const prisma = new PrismaClient();
  await prisma.post.delete({where:{id:formData.get("id")}})
  
}
