import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';
import { store } from './store';

import { StoreProvider } from './storeProvider';

injectTapEventPlugin();

export const Root = () => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <StoreProvider
                store={store}
                history={browserHistory}
                routes={routes}
            />
        </MuiThemeProvider>
    )
};