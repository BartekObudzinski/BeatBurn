import { store } from '@App/store';
import { RouteNavigator } from '@Navigation/Route';
import React from 'react';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <RouteNavigator />
    </Provider>
  );
}
