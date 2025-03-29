const now = new Date();
const utc = now.getTime() + now.getTimezoneOffset() * 60000;
export const KST = new Date(utc + 9 * 60 * 60000);
