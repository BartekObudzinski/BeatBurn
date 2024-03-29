import { Button } from '@Components/Atoms/Button';
import { Circle } from '@Components/Atoms/Circle';
import { ICON_DEFAULT_SIZE } from '@Components/Pages/Welcome/consts';
import { useWelcomeScreen } from '@Components/Pages/Welcome/Hook';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export const Welcome = () => {
  const { handleSignIn, handleSignUp } = useWelcomeScreen();
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-end">
      <View className="h-full "></View>
      <View className="p-4 h-1/3  items-center bg-tra ">
        <View className="w-full mt-4">
          <Button onPress={handleSignUp}>
            {t('screen_welcome_button_sign_up_label')}
          </Button>
          <Button onPress={handleSignIn} className="mt-2" variant={'secondary'}>
            {t('screen_welcome_button_sign_in_label')}
          </Button>
        </View>
        <View className="flex-row justify-center items-center mt-5 mb-5">
          <View className="h-0.5 w-24 bg-black rounded opacity-40" />
          <Text className="ml-2 mr-2 text-black">
            {t('screen_welcome_button_sign_in_extension_label')}
          </Text>
          <View className="h-0.5 w-24 bg-black rounded opacity-40" />
        </View>
        <View className="flex-row">
          <Circle className="mr-2 ml-2">
            <FontAwesome name="google" size={ICON_DEFAULT_SIZE} color="white" />
          </Circle>
          <Circle className="mr-2 ml-2">
            <FontAwesome
              name="facebook-square"
              size={ICON_DEFAULT_SIZE}
              color="white"
            />
          </Circle>
        </View>
      </View>
    </View>
  );
};
