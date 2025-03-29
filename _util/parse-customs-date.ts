export const parseCustomsDate = (str: string): string => {
  if (str.length < 14) return '';

  const year = str.slice(0, 4);

  const MM = str.slice(4, 6);
  const DD = str.slice(6, 8);
  const HO = str.slice(8, 10);
  const MI = str.slice(10, 12);
  const YY = year.slice(-2);
  return `${YY}/${MM}/${DD} ${HO}:${MI}`;
};
