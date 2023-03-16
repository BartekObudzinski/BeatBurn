import { Login } from '@Components/Pages/Login';
import { Register } from '@Components/Pages/Register';
import { Welcome } from '@Components/Pages/Welcome';
import { Stack } from '@Navigation/AuthStack/consts';

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="SignUp" component={Register} />
    </Stack.Navigator>
  );
};
