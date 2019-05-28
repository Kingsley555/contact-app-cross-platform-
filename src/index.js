import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetContacts } from './actions/contacts';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetContacts()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});

//  ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
