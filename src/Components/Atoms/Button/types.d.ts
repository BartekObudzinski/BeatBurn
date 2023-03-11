import { PressableProps } from 'react-native';

export type ButtonVariants = {
  default: string;
  primary: string;
  secondary: string;
  disabled: string;
};

export interface ButtonProps extends PressableProps {
  children?: React.ReactNode;
  variant?: keyof ButtonVariants;
}
