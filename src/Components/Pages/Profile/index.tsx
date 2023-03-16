import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export const Profile = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'Profile'>>();
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Pressable
        onPress={() => {
          navigate('BottomTab', { screen: 'Home' });
        }}>
        <Text>Profile</Text>
      </Pressable>
      <MapView />
    </View>
  );
};
