import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { BILLNO, CARGO_TITLE, LABEL, STATUS, TRACK, VIEWED_BILLNO } from './customs.css';

export function CustomsLabel({ ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={LABEL} {...props} />;
}

export function CustomsStatus({ ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={STATUS} {...props} />;
}

export function CustomsBillno({ ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={BILLNO} {...props} />;
}

export function CustomsViewedBillNoList({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={VIEWED_BILLNO} {...props} />;
}

export function CustomsTrack({ ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={TRACK} {...props} />;
}

export function CustomsCargoTitle({ ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={CARGO_TITLE} {...props} />;
}
