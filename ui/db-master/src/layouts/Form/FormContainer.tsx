import { Container } from '@mui/material';
import React, { ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
}

function FormContainer({ children }: FormContainerProps) {
  return (
    <>
      <Container
        id="container-form"
        style={{
          paddingLeft: '0px',
          marginLeft: '0px',
        }}
        maxWidth="lg"
      >
        {children}
      </Container>
    </>
  );
}

export default FormContainer;
