import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';

import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(
            thunkMiddleware,
            logger
        ),
        autoRehydrate()
    )
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
