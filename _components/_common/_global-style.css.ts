import { COLORS } from './_colors';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', { margin: 0, padding: 0, boxSizing: 'border-box' });

globalStyle('h1, h2, h3, h4, h5, h6, p, span', {
  fontFamily: '"42dot Sans", sans-serif',
});
globalStyle('input, button, textarea', {
  fontFamily: '"42dot Sans", sans-serif',
});
globalStyle('html', {
  backgroundColor: COLORS.GRAY_100,
  fontSize: '100%',
});
globalStyle('a', {
  fontFamily: '"42dot Sans", sans-serif',
  color: 'inherit',
  textDecoration: 'underline',
  textUnderlineOffset: '0.25rem',
});
globalStyle('ul', {
  paddingLeft: '1.1rem',
});
