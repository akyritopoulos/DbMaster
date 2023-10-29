import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import { Container } from '@mui/material';
import Auth from './components/auth';

function App() {
  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
