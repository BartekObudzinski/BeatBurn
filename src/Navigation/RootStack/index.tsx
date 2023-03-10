import { AuthStack } from '@Navigation/AuthStack';
import { AUTH_STACK } from '@Navigation/AuthStack/consts';
import { BottomTab } from '@Navigation/BottomTab';
import { BOTTOM_TAB } from '@Navigation/BottomTab/consts';
import { Stack } from '@Navigation/RootStack/consts';
import { NavigationContainer } from '@react-navigation/native';
import { selectIsLoggedIn } from '@Redux/Slices/auth-slice';
import { useSelector } from 'react-redux';

export const RootStack = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name={BOTTOM_TAB} component={BottomTab} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name={AUTH_STACK} component={AuthStack} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
