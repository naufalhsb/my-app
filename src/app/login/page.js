import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, width: '100%' }}>
        <TextField
          id="filled-basic"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" fullWidth>
          Login
        </Button>
      </Paper>
    </Box>
  );
}
