import { HTMLAttributes } from 'react';
import { GRID_BASE } from './grid.css';

export function Grid({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <main className={GRID_BASE} {...props} />;
}
