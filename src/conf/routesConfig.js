import Login from '../pages/Login';
import ComponentCatalog from '../pages/ComponentCatalog';
import Resgister from '../pages/Register';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';

export const routesConfig = [
    { path: '/', element: <Login /> },
    { path: '/componentCatalog', element: <ComponentCatalog /> },
    { path: '/register', element: <Resgister /> },
    { path: '/home', element: <Home /> },
    { path: '/forgotPassword', element: <ForgotPassword /> },
];