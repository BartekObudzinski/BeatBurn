import { Button } from '@Components/Atoms/Button';
import { Circle } from '@Components/Atoms/Circle';
import { Input } from '@Components/Atoms/Input';
import { useRegisterScreen } from '@Components/Pages/Register/Hook';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Register = () => {
  const { navigateToSignIn } = useRegisterScreen();

  const { t } = useTranslation();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="h-2/5 bg-mint" />
      <View className="pt-4 pl-8 pr-8">
        <Text className="text-3xl font-bold mt-3 mb-3">Sign up</Text>
        <View className="flex-row justify-center">
          <Circle className="mr-4">
            <FontAwesome name="google" size={24} color="white" />
          </Circle>
          <Circle>
            <FontAwesome name="facebook-square" size={24} color="white" />
          </Circle>
        </View>
        <Text className="text-center mt-3">
          {t('screen_login_continue_with_label')}
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
        <Input
          icon={
            <MaterialIcons name="alternate-email" size={24} color="lightgray" />
          }
          placeholder={t('screen_login_email_placeholder_label')}
        />
        <Input
          icon={
            <MaterialIcons name="alternate-email" size={24} color="lightgray" />
          }
          placeholder={t('screen_login_email_placeholder_label')}
        />
        <Button onPress={navigateToSignIn} className="mt-4" variant="secondary">
          Register
        </Button>
      </View>
    </SafeAreaView>
  );
};
