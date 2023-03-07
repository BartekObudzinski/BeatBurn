import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Login = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigate('Home');
        }}>
        <Text>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};
