import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

const auth = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={'column'}
          maxWidth={400}
          alignItems={'center'}
          justifyContent={'center'}
          margin={'auto'}
          marginTop={10}
          padding={10}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{ ':hover': { boxShadow: '10px 10px 20px #ccc' } }}
        >
          <Typography></Typography>
          <TextField
            margin="normal"
            type={'email'}
            variant="outlined"
            placeholder="Email"
          ></TextField>
          <TextField
            margin="normal"
            type={'password'}
            variant="outlined"
            placeholder="password"
          ></TextField>
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="info"
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default auth;
