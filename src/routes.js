import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { routesConfig } from 'conf/routesConfig';

const Routes = () => {
    return (
        <Switch>
            {routesConfig.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Switch>
    );
}

export default Routes;
