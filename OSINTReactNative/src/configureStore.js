import { configureStore, applyMiddleware  } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
}); 

const configureStore = () => {
  return configureStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
};

export default store;
