import { Login } from '@Components/Pages/Login';
import { BottomTab } from '@Navigation/BottomTab';
import { Stack } from '@Navigation/Route/consts';
import { NavigationContainer } from '@react-navigation/native';

export const RouteNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
