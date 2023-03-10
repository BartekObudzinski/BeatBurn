import { RootState } from '@App/store';
import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import { AppActions } from '@Redux/Slices/app-slice';
import { useTranslation } from 'react-i18next';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'BottomTab'>>();
  const { t } = useTranslation();
  const count = useSelector((state: RootState) => state.app.value);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigate('BottomTab', { screen: 'Profile' });
        }}>
        <Text>{t('hello')}</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(AppActions.increment())}>
        <Text>Increase</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable onPress={() => dispatch(AppActions.decrement())}>
        <Text>Decrease</Text>
      </Pressable>
    </SafeAreaView>
  );
};
