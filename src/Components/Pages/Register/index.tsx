import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Register = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'AuthStack'>>();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        style={{ backgroundColor: 'violet', padding: 10, borderRadius: 10 }}
        onPress={() => {
          navigate('AuthStack', { screen: 'SignIn' });
        }}>
        <Text>Zarejestruj</Text>
      </Pressable>
    </SafeAreaView>
  );
};
