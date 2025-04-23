// src/shared/ui/components/Loader.tsx
import { Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

type LoaderProps = {
  fullScreen?: boolean;
};

const Loader: React.FC<LoaderProps> = ({ fullScreen = false }) => {
  const theme = useTheme();

  if (fullScreen) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.background.default,
          zIndex: 1300,
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;
