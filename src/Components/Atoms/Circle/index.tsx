import { CIRCLE_DEFAULT_SIZE } from '@Components/Atoms/Circle/consts';
import { CircleProps } from '@Components/Atoms/Circle/types';
import React, { memo } from 'react';
import { View } from 'react-native';

export const Circle = memo(
  ({ size = CIRCLE_DEFAULT_SIZE, className, children }: CircleProps) => {
    return (
      <View
        className={`w-${size} h-${size} rounded-full bg-black items-center justify-center ${className}`}>
        {children}
      </View>
    );
  },
);
