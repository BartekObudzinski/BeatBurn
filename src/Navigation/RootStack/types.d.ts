import { BottomTabParamList } from '@Navigation/BottomTab/types';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

type AllStackParamList = RootStackParamList & BottomTabParamList;

export type RootStackScreenProps<T extends keyof AllStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
