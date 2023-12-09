"use client";
import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Modal, Typography } from "@mui/material";
import { Action } from "./Action";
import { state, useFormState } from "react-dom";
import { useRouter } from 'next/navigation'
import { ActionDelete } from "./ActionDelete"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialStage = {
  massage: null,
};


export function UserTable({ post }) {
    const router = useRouter()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, formAction] = useFormState(Action);
    const submit = (e) => {
        // console.log(e)
        // e.preventDefault()
        formAction(e)
        router.push('/')
        setOpen(false)
    }
    const [stateActionDelete, formActionDelete] = useFormState(ActionDelete);
    const deletePost = (e) => {
        // console.log(e)
        // e.preventDefault()
        formActionDelete(e)
        router.push('/')
        setOpen(false)
    }
  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Tambah Data
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Barang</TableCell>
              <TableCell align="right">Merek</TableCell>
              <TableCell align="right">Jumlah</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((item, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.nama_barang}
                </TableCell>
                <TableCell align="right">{item.merek}</TableCell>
                <TableCell align="right">{item.jumlah}</TableCell>
                <TableCell align="right">
                    <form action={deletePost}>
                        <input type="hidden" name="id" value={item.id} />
                    <Button type="submit">Delete</Button>
                    </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action={submit}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Barang"
                  variant="standard"
                  name="nama_barang"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Merek"
                  variant="standard"
                  name="merek"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Jumlah"
                  variant="standard"
                  name="jumlah"
                />
              </Grid>
              <Grid item xs={4}>
                <Button type="submit">Simpan</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}
