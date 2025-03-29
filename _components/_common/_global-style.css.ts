import { globalCss } from '~/stitches.config';
import { COLORS } from './_colors.css';

const setGlobalStyle = globalCss({
  '*, *::before, *::after': { margin: 0, padding: 0, boxSizing: 'border-box' },
  'h1, h2, h3, h4, h5, h6, p, span': {
    fontFamily: '"42dot Sans", sans-serif',
  },
  'input, button, textarea': {
    fontFamily: '"42dot Sans", sans-serif',
  },
  html: {
    backgroundColor: COLORS.GRAY_100,
    fontSize: '100%',
  },
  a: {
    fontFamily: '"42dot Sans", sans-serif',
    color: 'inherit',
    textDecoration: 'underline',
    textUnderlineOffset: '0.25rem',
  },
  ul: {
    paddingLeft: '1.1rem',
  },
});

export default setGlobalStyle;
