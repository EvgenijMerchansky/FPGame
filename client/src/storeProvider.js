import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export const StoreProvider = (props) => {

    let {store, history, routes} = props;

    return (
        <Provider store={ store }>
            <Router
                history={history}
                routes={routes}
            />
        </Provider>
    )
};