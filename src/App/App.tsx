import { store } from '@App/store';
import { RootStack } from '@Navigation/RootStack';
import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default registerRootComponent(App);
