export const formatNumberToPrice = (price: number): string => {
  return 'S/ ' + price.toFixed(2);
};

export const capitalize = (text: string) => {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};

export const generateUUID = (): string => {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }

  console.warn('crypto.randomUUID is unavailable. Generating basic UUID.');
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};