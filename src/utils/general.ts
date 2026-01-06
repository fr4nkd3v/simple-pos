export const formatNumberToPrice = (price: number): string => {
  return 'S/ ' + price.toFixed(2);
};

type TFormatToPriceOptions = {
  showSymbol?: boolean;
  forceDecimals?: boolean;
};

export const formatToPrice = (
  amount: number | string,
  optionals: TFormatToPriceOptions = { showSymbol: true, forceDecimals: true },
): string => {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Validate if the result is a valid number
  if (isNaN(value)) {
    throw new Error('El valor proporcionado no es un número válido.');
  }

  const { showSymbol = true, forceDecimals = true } = optionals;

  return new Intl.NumberFormat('es-PE', {
    style: showSymbol ? 'currency' : 'decimal',
    currency: 'PEN',
    minimumFractionDigits: forceDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(value);
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

export const formattedDate = (date: Date) => {
  return new Intl.DateTimeFormat('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};
