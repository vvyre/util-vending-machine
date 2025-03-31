import { recipe } from '@vanilla-extract/recipes';
import { COLORS } from './_colors';

export const headingRecipe = recipe({
  base: {
    color: COLORS.TEXT,
  },
  variants: {
    size: {
      L: {
        lineHeight: '1.25',
        fontSize: '1.75rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
      },
      M: {
        lineHeight: '1.25',
        fontSize: '1.25rem',
        fontWeight: '500',
        marginBottom: '1rem',
      },
      S: {
        lineHeight: '1.25',
        fontSize: '1rem',
        fontWeight: '500',
        marginBottom: '1rem',
      },
    },
  },
  defaultVariants: {
    size: 'L',
  },
});
