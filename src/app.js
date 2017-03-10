import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

//import routes from './routes';

import Root from "./RouteHandlers/Root";

render(
    <Provider store={store}>
        <Root />
    </Provider>, 
    document.getElementById('app')
)