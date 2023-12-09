import { Box, Button, FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import * as React from 'react';
import { UserTable } from './components/UserTable' ;
import { PrismaClient } from '@prisma/client';

export default async function Home() {
  const prisma = new PrismaClient();
  try {
    const post = await prisma.post.findMany();

    return (
      <>
      <UserTable post={post}></UserTable>
      </>
    );
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
