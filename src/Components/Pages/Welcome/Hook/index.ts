import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';

export const useWelcomeScreen = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'AuthStack'>>();
  const handleSignIn = () => {
    navigate('AuthStack', { screen: 'SignIn' });
  };
  const handleSignUp = () => {
    navigate('AuthStack', { screen: 'SignUp' });
  };

  return {
    handleSignIn,
    handleSignUp,
  };
};
