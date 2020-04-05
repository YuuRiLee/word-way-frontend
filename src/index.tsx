import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './routes/index';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './static/theme';
import rootReducer from './modules';
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <Root />
    </ThemeProvider>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
