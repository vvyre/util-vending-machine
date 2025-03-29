import { styled } from '~/stitches.config';
import { memo } from 'react';

export interface SpacingProps {
  size: string;
  dir?: 'v' | 'h';
}

export const Spacing = memo(({ size, dir = 'v' }: SpacingProps) => {
  const Comp = styled('div', {
    height: dir === 'v' ? size : 'auto',
    width: dir === 'h' ? size : 0,
  });

  return <Comp />;
});
