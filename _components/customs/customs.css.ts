import { COLORS } from '../_common/_colors';
import { style } from '@vanilla-extract/css';

export const LABEL = style({
  fontSize: '1.1rem',
  display: 'inline-block',
  minWidth: '5rem',
  fontFamily: '"42dot sans", sans-serif',
  fontWeight: '400',
});

export const BILLNO = style({
  fontFamily: 'space mono',
  textDecoration: 'none',
});

export const CARGO_TITLE = style({
  fontSize: '1.2rem',
  minHeight: '2rem',
  lineHeight: '1.3rem',
  fontWeight: 700,
  fontFamily: '"42dot sans", sans-serif',
});

export const STATUS = style({
  fontSize: '1.1rem',
  fontWeight: 400,
  fontFamily: '"42dot sans", sans-serif',
});

export const TRACK = style({
  fontSize: '1.1rem',
  marginLeft: '0.5rem',
  fontFamily: '"42dot sans", sans-serif',
});

export const VIEWED_BILLNO = style({
  fontFamily: 'space mono',
  margin: 0,
  background: COLORS.GRAY_100,
  borderRadius: '1rem',
  border: 'none',
  padding: '0.15rem 0.75rem 0.15rem 0.75rem',
  cursor: 'pointer',
  marginRight: '0.35rem',
  selectors: {
    '&:hover': {
      background: COLORS.GRAY_200,
    },
  },
});
