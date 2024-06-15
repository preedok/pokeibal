import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Card sx={{ minWidth: 275, }} className='m-5 p-5'>
        <CardContent>
          <App />
        </CardContent>
      </Card>
    </QueryClientProvider>
  </React.StrictMode>
);
