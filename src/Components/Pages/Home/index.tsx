import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import { AuthActions } from '@Redux/Slices/auth-slice';
import { useTranslation } from 'react-i18next';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'BottomTab'>>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await dispatch(AuthActions.unAuthUser());
      navigate('AuthStack', { screen: 'Welcome' });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Pressable
        onPress={handleLogout}
        style={{ padding: 20, backgroundColor: 'orange' }}>
        <Text>{t('hello')}</Text>
      </Pressable>
    </SafeAreaView>
  );
};
