import { styled } from '~/stitches.config';
import { COLORS } from '../_common/_colors.css';

export const Label = styled('span', {
  fontSize: '1.1rem',
  display: 'inline-block',
  minWidth: '5rem',
  fontFamily: '"42dot sans", sans-serif',
  fontWeight: '400',
});

export const BillNo = styled('span', {
  fontFamily: 'space mono',
  textDecoration: 'none',
});

export const CargoTitle = styled('p', {
  fontSize: '1.2rem',
  minHeight: '2rem',
  lineHeight: '1.3rem',
  fontWeight: 700,
  fontFamily: '"42dot sans", sans-serif',
});

export const Status = styled('span', {
  fontSize: '1.1rem',
  fontWeight: 400,
  fontFamily: '"42dot sans", sans-serif',
});

export const Track = styled('a', {
  fontSize: '1.1rem',
  marginLeft: '0.5rem',
  fontFamily: '"42dot sans", sans-serif',
});

export const ViewedBillNo = styled('button', {
  fontFamily: 'space mono',
  margin: 0,
  background: COLORS.GRAY_100,
  borderRadius: '1rem',
  border: 'none',
  padding: '0.15rem 0.75rem 0.15rem 0.75rem',
  cursor: 'pointer',
  marginRight: '0.35rem',
  '&:hover': {
    background: COLORS.GRAY_200,
  },
});
