import Link from 'next/link';
import type { ComponentProps, ElementType } from 'react';
import { TEXT_BASE } from './txt.css';

type TxtProps<T extends ElementType> = {
  as?: T | 'Link';
} & ComponentProps<T>;

export function Txt<T extends ElementType>({ as, ...props }: TxtProps<T>) {
  let Component = as ?? 'span';

  switch (Component) {
    default:
      return (
        <Component className={TEXT_BASE} {...props}>
          {props.children}
        </Component>
      );
    case 'a':
      return (
        <a
          className={TEXT_BASE}
          href={props.href}
          target={props.target ?? '_blank'}
          rel="noopener noreferrer"
          {...props}>
          {props.children}
        </a>
      );
    case 'Link':
      return (
        <Link href={props.href} className={TEXT_BASE} {...props} scroll={props.scroll ?? true}>
          {props.children}
        </Link>
      );
  }
}
