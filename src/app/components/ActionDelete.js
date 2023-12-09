"use server";
import { PrismaClient } from "@prisma/client";

export async function ActionDelete(prevState, formData) {
  const prisma = new PrismaClient();
  console.log(formData)
  await prisma.post.delete({where:{id:parseInt(formData.get("id"))}})
  
}
