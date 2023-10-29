import { Grid, Link, Typography } from '@mui/material';
import labels from '../../dictionaries/labels.json';
import './footer.css';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      id="footer"
      style={{
        borderTop: '1px solid #616161',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        minHeight: '1rem',
        zIndex: 100,
      }}
    ></footer>
  );
}

export default Footer;
