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
import { ActionUpdate } from "./ActionUpdate";

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
        handleClose()
    }

    const [id_barang, setIdBarang] = React.useState(null)
    const [nama_barang, setNamaBarang] = React.useState('')
    const [jumlah, setJumlah] = React.useState(0)
    const [tanggal, setTanggal] = React.useState("")
    const [openUpdate, setOpenUpdate] = React.useState(false);

    const handleOpenUpdate = (item) => {
      setIdBarang(item.id)
      setNamaBarang(item.barang)
      setJumlah(item.jumlah)
      let format_tanggal = item.tanggal.getFullYear() + "-" + parseInt(item.tanggal.getMonth())+1 + "-" + item.tanggal.getDate().toString().padStart(2, '0')
      setTanggal(format_tanggal)
      setOpenUpdate(true)
    };
    const handleCloseUpdate = () => setOpenUpdate(false);

    const [stateUpdate, formActionUpdate] = useFormState(ActionUpdate);
    const submitUpdate = (e) => {
        // console.log(e)
        // e.preventDefault()
        formActionUpdate(e)
        router.push('/')
        handleCloseUpdate()
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
              <TableCell align="right">Jumlah</TableCell>
              <TableCell align="right">Tanggal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((item, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {item.barang}
                </TableCell> */}
                <TableCell align="left">{item.barang}</TableCell>
                <TableCell align="right">{item.jumlah}</TableCell>
                <TableCell align="right">{item.tanggal.toLocaleDateString('en-GB')}</TableCell>
                <TableCell align="right">
                    <Button onClick={e => handleOpenUpdate(item)}>Update</Button>
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
                  name="barang"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="jumlah"
                  variant="standard"
                  name="jumlah"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="date"
                  id="outlined-basic"
                  label="tanggal"
                  variant="standard"
                  name="tanggal"
                />
              </Grid>
              <Grid item xs={4}>
                <Button type="submit">Simpan</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>

      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action={submitUpdate}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <input type="hidden" name="id" value={id_barang} onChange={e => setIdBarang(e.target.value)} />
                <TextField
                  value={nama_barang}
                  onChange={(event) => setNamaBarang(event.target.value)}
                  id="outlined-basic"
                  label="Barang"
                  variant="standard"
                  name="barang"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={jumlah}
                  onChange={(event) => setJumlah(event.target.value)}
                  id="outlined-basic"
                  label="jumlah"
                  variant="standard"
                  name="jumlah"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={tanggal}
                  onChange={(event) => setTanggal(event.target.value)}
                  type="date"
                  id="outlined-basic"
                  label="tanggal"
                  variant="standard"
                  name="tanggal"
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
