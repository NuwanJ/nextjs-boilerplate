'use client';
import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid';

export interface AppGridProps extends MuiGridProps {}

export default function AppGrid({ spacing = 2, ...props }: AppGridProps) {
  return <MuiGrid spacing={spacing} {...props} />;
}
