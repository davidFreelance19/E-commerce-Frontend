import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { StyledEngineProvider } from '@mui/material/styles';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import "primereact/resources/themes/lara-light-indigo/theme.css";   
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";   
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import '@splidejs/splide-extension-grid'
import '@splidejs/react-splide'
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <Provider store={store}>
            <QueryClientProvider client={client}>
                <ReactQueryDevtools />
                <StyledEngineProvider injectFirst>
                    <App />
                </StyledEngineProvider>
            </QueryClientProvider>
        </Provider>

    </React.StrictMode>

)
