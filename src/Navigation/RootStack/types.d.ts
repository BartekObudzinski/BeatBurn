import { AuthStackParamList } from '@Navigation/AuthStack/types';
import { BottomTabParamList } from '@Navigation/BottomTab/types';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

type AllStackParamList = RootStackParamList & BottomTabParamList;

export type RootStackScreenProps<T extends keyof AllStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
