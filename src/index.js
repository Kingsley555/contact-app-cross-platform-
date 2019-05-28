import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addContact } from './actions/contacts';
import visibleContacts from './selectors/contacts';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import './firebase/firebase';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.dispatch(
  addContact({
    firstName: 'kingsley',
    lastName: 'oha',
    phone: 1000,
    email: 'king',
    twitter: 'kc',
    description: 'hello'
  })
);
store.dispatch(
  addContact({
    firstName: 'bisi',
    lastName: 'sole',
    phone: 100,
    email: 'king',
    twitter: 'kc',
    description: 'hello'
  })
);
store.dispatch(
  addContact({
    firstName: 'seye',
    lastName: 'omi',
    phone: 100,
    email: 'king',
    twitter: 'kc',
    description: 'hello'
  })
);
store.dispatch(
  addContact({
    firstName: 'eni',
    lastName: 'lata',
    phone: 100,
    email: 'king',
    twitter: 'kc',
    description: 'hello',
    createdAt: 1000
  })
);

const state = store.getState();
const visibleContactList = visibleContacts(state.contacts, state.filters);

console.log(visibleContactList);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//  ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
