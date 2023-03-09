import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Login = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'Login'>>();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        style={{ backgroundColor: 'violet', padding: 10, borderRadius: 10 }}
        onPress={() => {
          navigate('BottomTab');
        }}>
        <Text>Zaloguj</Text>
      </Pressable>
    </SafeAreaView>
  );
};
