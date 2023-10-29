import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import Footer from './layouts/Footer/Footer';
import Navbar from './layouts/Navbar/Navbar';
import ContentLayout from './layouts/Form/ContentLayout';
import Theme from './Themes/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <SnackbarProvider maxSnack={3}>
          <ContentLayout>
            <Navbar />
            <App />
            <Footer />
          </ContentLayout>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
