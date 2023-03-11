import {
  buttonTextVariants,
  buttonVariants,
} from '@Components/Atoms/Button/consts';
import { ButtonProps } from '@Components/Atoms/Button/types';
import React from 'react';
import { Pressable, Text } from 'react-native';
export const Button = ({
  children,
  variant = 'primary',
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  if (disabled) {
    variant = 'disabled';
  }
  return (
    <Pressable
      {...rest}
      disabled={disabled}
      className={`${buttonVariants.default} ${buttonVariants[variant]}  ${className}`}>
      <Text
        className={`${buttonTextVariants.default} ${buttonTextVariants[variant]} `}>
        {children}
      </Text>
    </Pressable>
  );
};
