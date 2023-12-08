import { Box, Button, FormControl, InputLabel, Input, FormHelperText } from "@mui/material"
import { PrismaClient } from '@prisma/client'

export default async function Home() {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()
  
  return (
    <>
    <table>
      <thead>
      <tr>
        <td>Nama</td>
        <td>Email</td>
      </tr>
      </thead>
      <tbody>
      {users.map((item, i)=> (
      <tr>
        <><td>{item.name}</td><td>{item.email}</td></>
      </tr>
      ))}  
      </tbody>
      </table>
    
    </>
  )
}
