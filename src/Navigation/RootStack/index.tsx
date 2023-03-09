import { Login } from '@Components/Pages/Login';
import { BottomTab } from '@Navigation/BottomTab';
import { BOTTOM_TAB } from '@Navigation/BottomTab/consts';
import { Stack } from '@Navigation/RootStack/consts';
import { NavigationContainer } from '@react-navigation/native';

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name={BOTTOM_TAB} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
