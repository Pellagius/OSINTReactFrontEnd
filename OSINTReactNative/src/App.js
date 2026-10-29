import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Navigation from './navigation/navigation';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
