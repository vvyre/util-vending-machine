import React, { ComponentProps } from 'react';
import { INPUT, MONOSPACE_INPUT } from './input.css';

export interface InputProps extends ComponentProps<'input'> {
  monospace?: boolean;
}

export function Input({ monospace = false, ...props }: InputProps) {
  const className = monospace ? MONOSPACE_INPUT : INPUT;
  return <input className={className} {...props} />;
}
