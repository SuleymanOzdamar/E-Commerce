import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BasketProvider,  } from './components/contexts/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
