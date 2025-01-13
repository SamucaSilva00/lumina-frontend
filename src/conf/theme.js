import { createTheme } from '@mui/material'

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
        }
    },
    palette: {
        primary: {
            main: '#e573a6',           // Rosa suave como tom principal
            light: '#f3a5c4',          // Rosa claro
            dark: '#c64d78',           // Rosa mais escuro para contraste
            contrastText: '#FFFFFF'    // Texto branco para boa legibilidade
        },
        secondary: {
            main: '#d2a1c4',           // Lilás suave para combinações secundárias
            light: '#eac9e2',          // Lilás claro
            dark: '#a87a9e',           // Lilás escuro para contraste
            contrastText: '#FFFFFF'    // Texto branco
        },
        background: {
            default: '#FFF0F6',        // Fundo rosado muito claro para suavidade
            paper: '#FFFFFF'           // Papel branco para destaque
        },
        text: {
            primary: '#5a3c5e',        // Roxo escuro para o texto principal
            secondary: '#925d92',      // Roxo mais suave para o texto secundário
            disabled: '#c89baf',       // Cinza rosado para estados desabilitados
        },
        success: {
            main: '#81c784',           // Verde suave para mensagens de sucesso
            light: '#b2fab4',
            dark: '#519657',
            contrastText: '#FFFFFF'
        },
        error: {
            main: '#e57373',           // Vermelho suave para erros
            light: '#ffa4a2',
            dark: '#af4448',
            contrastText: '#FFFFFF'
        },
        warning: {
            main: '#ffb74d',           // Amarelo suave para alertas
            light: '#ffe97d',
            dark: '#c88719',
            contrastText: '#FFFFFF'
        },
        info: {
            main: '#ba68c8',           // Roxo suave para informações
            light: '#ee98fb',
            dark: '#883997',
            contrastText: '#FFFFFF'
        },
        divider: '#f3d7e1',            // Rosa claro para divisores
        action: {
            active: '#5a3c5e',         // Roxo escuro para itens ativos
            hover: 'rgba(90, 60, 94, 0.04)',
            selected: 'rgba(90, 60, 94, 0.08)',
            disabledBackground: 'rgba(200, 155, 175, 0.12)',
            disabled: 'rgba(200, 155, 175, 0.26)'
        }
    },
    typography: {
        fontFamily: '"DM Sans", sans-serif',
        button: {
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: '700',
        },
        navlink: {
            fontFamily: '"Carattere", cursive',
        },
        body: {
            fontFamily: '"DM Sans", sans-serif',
        },
        h1: {
            fontFamily: '"Carattere", cursive',
        },
        h2: {
            fontFamily: '"Carattere", cursive',
        },
        h5: {
            fontFamily: '"Carattere", cursive',
        },
        h6: {
            fontFamily: '"DM Sans", sans-serif',
        },
        h6Sub: {
            fontFamily: '"DM Sans", sans-serif',
        },
        notificationLabel: {
            fontFamily: '"DM Sans", sans-serif',
        },
        notificationSubLabel: {
            fontFamily: '"DM Sans", sans-serif',
        },
        sublabel: {
            fontFamily: '"DM Sans", sans-serif',
        },
        label: {
            fontFamily: '"DM Sans", sans-serif',
        }
    }

})
