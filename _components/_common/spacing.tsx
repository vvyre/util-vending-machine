import { memo } from 'react';

export interface SpacingProps {
  size: string;
  dir?: 'v' | 'h';
}

export const Spacing = memo(({ size, dir = 'v' }: SpacingProps) => {
  return (
    <div
      style={{
        height: dir === 'v' ? size : 'auto',
        width: dir === 'h' ? size : 0,
      }}
    />
  );
});
