import { style } from '@vanilla-extract/css';
import { COLORS } from './_colors';

export const GRID_BASE = style({
  margin: '0 auto',
  width: '100%',
  maxWidth: '40rem',
  position: 'relative',
  minHeight: '100dvh',
  backgroundColor: COLORS.WHITE,
  padding: '0 2rem 0 2rem',
  borderLeft: `1px solid ${COLORS.GRAY_200}`,
  borderRight: `1px solid ${COLORS.GRAY_200}`,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 0px 8px',
});
