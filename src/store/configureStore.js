import { createStore, combineReducers } from 'redux';
import contactsReducer from '../reducers/contacts';
import filtersReducer from '../reducers/filters';

// Creates a redux store and combine all the reducers

export default () => {
  const store = createStore(
    combineReducers({
      contacts: contactsReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
