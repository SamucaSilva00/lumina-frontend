import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { theme } from "conf/theme";
import AuthContext from 'contexts/AuthContext';
import SnackBarContext from 'contexts/SnackBarContext';
import { ThemeProvider } from '@emotion/react';
import '@fontsource/playfair-display'; // Padrão: peso 400
import '@fontsource/playfair-display/500.css'; // Peso 500
import '@fontsource/playfair-display/700.css'; // Peso 700

import '@fontsource/dm-sans'; // Padrão: peso 400
import '@fontsource/dm-sans/500.css'; // Peso 500
import '@fontsource/dm-sans/700.css'; // Peso 700
import '@fontsource/carattere';


const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <AuthContext>
            <SnackBarContext>
                <ThemeProvider theme={theme}>
                    <Routes />
                </ThemeProvider>
            </SnackBarContext>
        </AuthContext>
    </BrowserRouter >
);
