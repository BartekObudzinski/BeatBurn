import { Button } from '@Components/Atoms/Button';
import { Circle } from '@Components/Atoms/Circle';
import { Input } from '@Components/Atoms/Input';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { RootStackScreenProps } from '@Navigation/RootStack/types';
import { useNavigation } from '@react-navigation/native';
import { AuthActions } from '@Redux/Slices/auth-slice';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const { navigate } = useNavigation<RootStackScreenProps<'AuthStack'>>();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleLogin = async () => {
    try {
      await dispatch(AuthActions.authUser());
      navigate('BottomTab', { screen: 'Home' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className=" h-full">
      <View className="h-2/5 bg-mint" />

      <View className="pt-4 pl-8 pr-8">
        <Text className="text-3xl font-bold mt-3 mb-3">
          {t('screen_login_header_label')}
        </Text>
        <Input
          icon={
            <MaterialIcons name="alternate-email" size={24} color="lightgray" />
          }
          placeholder={t('screen_login_email_placeholder_label')}
        />
        <Input
          icon={
            <MaterialIcons name="lock-outline" size={24} color="lightgray" />
          }
          placeholder={t('screen_login_password_placeholder_label')}
        />
        <Button onPress={handleLogin} className="mt-8" variant="secondary">
          {t('screen_login_button_label')}
        </Button>
        <Text className="mt-8 mb-8 text-center">
          {t('screen_login_continue_with_label')}
        </Text>
        <View className="flex-row justify-center">
          <Circle className="mr-4">
            <FontAwesome name="google" size={24} color="white" />
          </Circle>
          <Circle>
            <FontAwesome name="facebook-square" size={24} color="white" />
          </Circle>
        </View>

        <Text className="mt-8 mb-8 text-center">
          {t('screen_login_sign_up_label')}
        </Text>
      </View>
    </SafeAreaView>
  );
};
