import { InputProps } from '@Components/Atoms/Input/types';
import React from 'react';
import { TextInput, View } from 'react-native';
export const Input = ({ className, icon, ...rest }: InputProps) => {
  return (
    <View className="flex-row items-center border-b border-b-gray-300 rounded-lg pb-3 pt-3 mb-2">
      <View className="mr-2 mt-1">{icon}</View>
      <TextInput className={`flex-1 text-lg ${className}`} {...rest} />
    </View>
  );
};
