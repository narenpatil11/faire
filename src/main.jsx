import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';
import './index.css'
import { MantineProvider } from '@mantine/core';
import { theme } from "./theme.js";
import { TodoListContextProvider } from './ListContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <TodoListContextProvider>
        <App />
      </TodoListContextProvider>
    </MantineProvider>
  </React.StrictMode>,
)
