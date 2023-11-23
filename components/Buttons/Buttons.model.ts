import { ButtonHTMLAttributes } from 'react';

interface GeneralProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'text';
  styles?: string;
  disabled?: boolean;
  iconSize?: string;
}

export interface ButtonProps extends GeneralProps {
  value?: string;
}

export interface IconButtonProps extends GeneralProps {}

export type ButtonVariant = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  outlined?: string;
  text?: string;
};
