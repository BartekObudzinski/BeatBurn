import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Profile = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'Profile'>>();
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigate('BottomTab', { screen: 'Home' });
        }}>
        <Text>Profile</Text>
      </Pressable>
    </SafeAreaView>
  );
};
