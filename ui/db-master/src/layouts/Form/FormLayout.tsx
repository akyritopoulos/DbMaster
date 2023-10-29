import { Box } from '@mui/system';
import React, { ReactNode } from 'react';

interface FormLayoutProps {
  children: ReactNode;
}

function FormLayout({ children }: FormLayoutProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '25px',
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default FormLayout;
