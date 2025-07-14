'use client';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface AppButtonProps extends MuiButtonProps {
  label?: string;
}

export default function AppButton({ label, variant = 'contained', children, ...props }: AppButtonProps) {
  return (
    <MuiButton variant={variant} {...props}>
      {label || children}
    </MuiButton>
  );
}
