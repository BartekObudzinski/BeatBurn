import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Profile = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigate('Home');
        }}>
        <Text>Profile</Text>
      </Pressable>
    </SafeAreaView>
  );
};
