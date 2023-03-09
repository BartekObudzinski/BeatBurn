import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from 'src/Navigation/BottomTab/types';

export const BOTTOM_TAB = 'BottomTab';

export const Tab = createBottomTabNavigator<BottomTabParamList>();
