import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
// import 'antd/dist/antd.css';
import 'antd/dist/reset.css';

import App from './App';
import store from '../src/redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);
