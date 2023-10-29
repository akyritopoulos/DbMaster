import { createTheme } from '@mui/material/styles';
import { elGR } from '@mui/material/locale';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      h1: {
        fontSize: '2rem',
        fontWeight: '700',
        '@media (min-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: '700',
        '@media (min-width:600px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontSize: '1.125rem',
        fontWeight: '700',
        '@media (min-width:600px)': {
          fontSize: '1.3rem',
        },
      },
      h4: {
        fontSize: '1rem',
        fontWeight: '700',
        '@media (min-width:600px)': {
          fontSize: '1.1rem',
        },
      },
      h5: {
        fontSize: '0.81rem',
        fontWeight: '700',
      },
      h6: {
        fontSize: '0.81rem',
        fontWeight: '700',
      },
      body1: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.43',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: '8px 22px',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'black',
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          MenuProps: {
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              },
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          option: {
            '&[aria-disabled="true"]': {
              color: 'black',
            },
          },
        },
      },
    },
    palette: {
      primary: {
        main: '#003476',
      },
      secondary: {
        main: '#046ec5',
      },
      success: {
        main: '#00703c',
      },
      error: {
        main: '#ca2e2e',
      },
      warning: {
        light: 'rgb(255, 244, 229)',
        dark: 'rgb(102, 60, 0)',
        main: '#ffa726',
      },
      action: {
        disabledOpacity: 1,
      },
    },
  },
  elGR
);
