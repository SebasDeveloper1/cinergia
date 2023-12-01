'use client';
import { IconButtonProps, ButtonVariant } from '../Buttons.model';

export default function IconButton({
  variant = 'primary',
  styles = '',
  disabled = false,
  children,
  ...IconButtonProps
}: IconButtonProps): JSX.Element {
  const buttonVariant: ButtonVariant = {
    primary: 'button-primary rounded-full p-2.5',
    secondary: 'button-secondary rounded-full p-2.5',
    tertiary: 'button-tertiary rounded-full p-2.5',
    outlined: 'button-outlined rounded-full p-2.5',
    text: 'button-text rounded-full p-2.5',
  };

  return (
    <button
      disabled={disabled}
      className={`${buttonVariant[variant]} ${styles} ${
        disabled ? 'opacity-50' : ''
      }`}
      {...IconButtonProps}
    >
      {children}
    </button>
  );
}
