import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import App from './components/App';
import './styles/init.css';

const root = document.getElementById('root');


if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );
} else {
  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      root,
    );
  };

  render();
  if (module.hot) module.hot.accept('./components/App', render);
}

