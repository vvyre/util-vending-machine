'use client';
import Link from 'next/link';
import { Button } from '../_common/button';
import { styled } from '~/stitches.config';
import { useBooleanState } from '@frfla/react-hooks';

export function Category() {
  const [isOpen, _, __, toggle] = useBooleanState();
  return (
    <Wrapper>
      {isOpen && (
        <Menu>
          <Link href="/customs">
            <Button type="button">직구물품 통관</Button>
          </Link>
          <Link href="/">
            <Button type="button">처음으로</Button>
          </Link>
        </Menu>
      )}
      <Button ui="floating" type="button" onClick={toggle}>
        {isOpen ? '×' : '—'}
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  width: '7.5rem',
  gap: '0.25rem',
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  bottom: '0',
  right: '0',
  padding: '1rem',
});

const Menu = styled('div', {
  width: '7.5rem',
  gap: '0.1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
});
