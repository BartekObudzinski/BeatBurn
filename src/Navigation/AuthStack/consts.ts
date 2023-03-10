import { AuthStackParamList } from '@Navigation/AuthStack/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const AUTH_STACK = 'AuthStack';

export const Stack = createNativeStackNavigator<AuthStackParamList>();
