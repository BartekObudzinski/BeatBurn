import { store } from '@App/store';
import { RouteNavigator } from '@Navigation/Route';
import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RouteNavigator />
    </Provider>
  );
};

export default registerRootComponent(App);
