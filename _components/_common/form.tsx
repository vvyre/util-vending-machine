import { FormHTMLAttributes } from 'react';
import { FORM_BASE } from './form.css';

type FormProps = FormHTMLAttributes<HTMLFormElement>;

export function Form({ ...props }: FormProps) {
  return <form className={FORM_BASE} {...props} />;
}
