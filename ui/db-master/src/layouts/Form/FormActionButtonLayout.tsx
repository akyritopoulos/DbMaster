import { Box } from '@mui/system';
import React, { ReactNode } from 'react';

interface FormActionButtonLayoutProps {
  children: ReactNode;
}

function FormActionButtonLayout({ children }: FormActionButtonLayoutProps) {
  return (
    <>
      <Box
        mt={3}
        sx={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}
      >
        {children}
      </Box>
    </>
  );
}

export default FormActionButtonLayout;
