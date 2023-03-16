import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';

export const useRegisterScreen = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'AuthStack'>>();
  // navigate('AuthStack', { screen: 'SignIn' });
  const navigateToSignIn = () => navigate('AuthStack', { screen: 'SignIn' });
  return { navigateToSignIn };
};
