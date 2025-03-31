import { recipe } from '@vanilla-extract/recipes';
import { COLORS } from './_colors';

export const buttonRecipe = recipe({
  base: {
    cursor: 'pointer',
    width: '100%',
    borderRadius: '0.5rem',
    padding: '0 0.5rem',
    border: 'none',

    selectors: {
      '&:disabled': {
        color: 'white',
        backgroundColor: COLORS.GRAY_400,
        cursor: 'not-allowed',
        outline: 'none',
      },
      '&:disabled:hover': {
        color: 'white',
        backgroundColor: COLORS.GRAY_400,
        outline: 'none',
      },
    },
  },

  variants: {
    ui: {
      confirm: {
        position: 'fixed',
        bottom: '2rem',
        maxWidth: '36rem',
        fontWeight: '700',
        fontSize: '1.1rem',
        height: '3rem',
      },
      default: {
        fontWeight: '500',
        fontSize: '0.95rem',
        height: '2.15rem',
      },
      floating: {
        zIndex: 99999,
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 0px 8px',
        borderRadius: '2rem',
        fontWeight: '300',
        fontSize: '1.15rem',
        width: '3rem',
        height: '3rem',
      },
    },
    color: {
      black: {
        border: '1px solid transparent',
        backgroundColor: COLORS.GRAY_700,
        color: COLORS.WHITE,

        selectors: {
          '&:hover': {
            backgroundColor: COLORS.GRAY_900,
          },
        },
      },
      white: {
        border: '1px solid transparent',
        backgroundColor: 'white',
        color: COLORS.TEXT,

        selectors: {
          '&:hover': {
            backgroundColor: COLORS.GRAY_200,
          },
        },
      },
    },
  },

  defaultVariants: {
    ui: 'default',
    color: 'white',
  },
});
