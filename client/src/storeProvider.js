import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export const StoreProvider = ({store, history, routes}) => {

    return (
        <Provider store={ store }>
            <Router
                history={history}
                routes={routes}
            />
        </Provider>
    )
};