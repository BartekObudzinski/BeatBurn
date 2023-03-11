import { store } from '@App/store';
import '@Locales/i18n';
import { RootStack } from '@Navigation/RootStack';
import { registerRootComponent } from 'expo';
import { NativeWindStyleSheet } from 'nativewind';
import React from 'react';
import { Provider } from 'react-redux';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default registerRootComponent(App);
