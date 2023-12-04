import { Box, Button, FormControl, InputLabel, Input, FormHelperText } from "@mui/material"

export default function Home() {
  return (
    <Box>
      <h1 className="mt-20">Login</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
      <Button variant="contained">Submit</Button>
    </Box>
  )
}
