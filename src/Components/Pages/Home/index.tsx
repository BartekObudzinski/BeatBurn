import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'BottomTab'>>();
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigate('BottomTab', { screen: 'Profile' });
        }}>
        <Text>{t('hello')}</Text>
      </Pressable>
    </SafeAreaView>
  );
};
