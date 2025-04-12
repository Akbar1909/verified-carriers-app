export const formatWithSpaces = (
    input: number | string | null | undefined,
    placeholder?: any,
    fractionalPartDecimals?: number
  ): string => {
    // Handle null and undefined
    if (input === null || input === undefined) {
      return placeholder || 'Invalid input';
    }
  
    // Convert the input to a string if it's a number
    const numStr = typeof input === 'number' ? input.toString() : input;
  
    // Ensure the input is a valid number-like string
    if (isNaN(Number(numStr))) {
      return placeholder || 'Invalid input';
    }
  
    // Split into integer and fractional parts
    const [integerPart, fractionalPart] = numStr?.split('.');
  
    // Reverse the integer part for easier grouping
    const reversedIntegerPart = integerPart?.split('').reverse().join('');
  
    // Group digits into chunks of 3
    const groupedIntegerPart =
      reversedIntegerPart.match(/.{1,3}/g)?.join(',') || '';
  
    // Reverse back to original order
    const formattedIntegerPart = groupedIntegerPart?.split('').reverse().join('');
  
    // Format the fractional part
    const formattedFractionalPart = fractionalPart
      ? fractionalPartDecimals !== undefined
        ? fractionalPart.padEnd(fractionalPartDecimals, '0')
        : fractionalPart
      : fractionalPartDecimals !== undefined
        ? '0'.padEnd(fractionalPartDecimals, '0')
        : '';
  
    // Combine the integer and fractional parts
    return formattedFractionalPart
      ? `${formattedIntegerPart}.${String(formattedFractionalPart).slice(0, fractionalPartDecimals)}`
      : formattedIntegerPart;
  };