import { ButtonVariants } from '@Components/Atoms/Button/types';

export const buttonVariants: ButtonVariants = {
  default: 'w-full py-3 rounded-md items-center',
  primary: 'bg-white',
  secondary: 'bg-black',
  disabled: 'bg-gray-300',
};

export const buttonTextVariants: ButtonVariants = {
  default: 'text-base font-medium',
  primary: 'text-black',
  secondary: 'text-white',
  disabled: 'text-gray-600',
};
