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

  /**
 * Joins an array of strings with a specified separator, skipping empty, undefined, or null values.
 *
 * @param {Array<string | null | undefined>} strings - The array of strings to join.
 * @param {string} [separator=" "] - The separator to use between strings. Defaults to a single space.
 * @returns {string} The joined string, excluding any invalid values.
 *
 * @example
 * joinStrings(["hello", null, undefined, "world"], "/");
 * // Returns: "hello/world"
 *
 * @example
 * joinStrings([null, undefined, " ", "valid"], "-");
 * // Returns: "valid"
 *
 * @example
 * joinStrings([null, undefined]);
 * // Returns: ""
 */
export const joinStrings = (
  strings: (string | null | undefined)[],
  separator: string = ' '
): string =>
  strings
    .filter((str) => {
      const preparedStr = typeof str === 'number' ? String(str) : str;

      return typeof preparedStr === 'string' && preparedStr.trim() !== '';
    })
    .join(separator);

    export const returnArray = (arg: any) => (Array.isArray(arg) ? arg : []);

  /**
 * Extracts all numeric characters from a given input string.
 * If the input is null or undefined, an empty string is returned.
 *
 * @param {string|null|undefined} input - The input string from which to extract numbers.
 * @returns {string} A string containing only the numeric characters from the input.
 *                  If the input is null or undefined, returns an empty string.
 */
export const extractNumbers = (input: string | null | undefined): string => {
  if (!input) {
    return '';
  }
  return input.replace(/\D/g, '');
};


/**
 * Cleans and formats a user-provided phone number string by:
 * - Removing all non-numeric characters.
 * - Removing the leading '8' if it exists.
 *
 * @param {string} phoneNumber - The phone number string to clean.
 * @returns {string} - The cleaned phone number string, with all non-numeric characters removed and the leading '8' removed (if present).
 */
export const cleanPhoneNumber = (phone: string) =>
  phone.replace(/[^\d]/g, '').replace(/^8/, '');

export const formatBytes = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';

  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const formattedBytes = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));

  return `${formattedBytes} ${sizes[i]}`;
};

/**
 * Generates an array containing a range of years from startYear to endYear (inclusive).
 *
 * @param {number} startYear - The first year in the range.
 * @param {number} endYear - The last year in the range.
 * @returns {number[]} An array of numbers representing all years in the range.
 * If startYear is greater than endYear, returns an empty array.
 * 
 * @example
 * // Returns [2020, 2021, 2022, 2023]
 * const years = generateYearRange(2020, 2023);
 * 
 * @example
 * // Returns []
 * const emptyRange = generateYearRange(2023, 2020);
 */
export const generateYearRange = (startYear: number, endYear: number): number[] => {
  if (startYear > endYear) {
    return [];
  }
  
  return Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
};

/**
 * Safely parses a JSON string into a JavaScript object.
 *
 * @param {string} value - The JSON string to be parsed.
 * @returns {Object|null} - The parsed JavaScript object, or `null` if parsing fails.
 * @throws {SyntaxError} - If the JSON string is invalid, an error is logged, and `null` is returned.
 */
export const jsonParse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error parsing JSON:', error);
    return null;
  }
};

/**
 * Safely converts a JavaScript object or value to a JSON string.
 *
 * @param {any} value - The JavaScript value to be stringified (object, array, number, string, etc.).
 * @returns {string|null} - The JSON string representation of the value, or `null` if stringification fails.
 * @throws {TypeError} - If the value cannot be converted to JSON, an error is logged, and `null` is returned.
 */
export const jsonStringify = (value: any) => {
  try {
    return JSON.stringify(value);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error parsing JSON:', error);
    return null;
  }
};