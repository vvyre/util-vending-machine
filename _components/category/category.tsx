'use client';
import Link from 'next/link';
import { Button } from '../_common/button';
import { useBooleanState } from '@frfla/react-hooks';
import { MENU, WRAPPER } from './category.css';

export function Category() {
  const [isOpen, _, __, toggle] = useBooleanState();
  return (
    <div className={WRAPPER}>
      {isOpen && (
        <div className={MENU}>
          <Link href="/customs">
            <Button type="button">직구물품 통관</Button>
          </Link>
          <Link href="/">
            <Button type="button">처음으로</Button>
          </Link>
        </div>
      )}
      <Button ui="floating" type="button" onClick={toggle}>
        {isOpen ? '×' : '—'}
      </Button>
    </div>
  );
}
