import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import { AuthActions } from '@Redux/Slices/auth-slice';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'AuthStack'>>();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      await dispatch(AuthActions.authUser());
      navigate('BottomTab', { screen: 'Home' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      className="bg-black"
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        style={{ backgroundColor: 'violet', padding: 10, borderRadius: 10 }}
        onPress={handleLogin}>
        <Text>Zaloguj</Text>
      </Pressable>
    </SafeAreaView>
  );
};
