import { RootState } from '@App/store';
import { useNavigation } from '@react-navigation/native';
import { AppActions } from '@Redux/Slices/app-slice';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const { navigate } = useNavigation();
  const count = useSelector((state: RootState) => state.app.value);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigate('Login');
        }}>
        <Text>Home</Text>
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
