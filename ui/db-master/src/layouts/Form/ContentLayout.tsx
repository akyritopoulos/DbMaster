import { Box } from '@mui/system';
import React, { ReactNode } from 'react';

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <Box
      id="content-layout"
      style={{
        display: 'grid',
        flexGrow: 1,
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100vh',
      }}
    >
      {children}
    </Box>
  );
};

export default ContentLayout;
