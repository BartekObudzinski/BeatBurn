import { CircleProps } from '@Components/Atoms/Circle/types';
import React, { memo } from 'react';
import { View } from 'react-native';

export const Circle = memo(({ className, children }: CircleProps) => {
  return (
    <View
      className={`w-12 h-12 rounded-full bg-black items-center justify-center ${className}`}>
      {children}
    </View>
  );
});
