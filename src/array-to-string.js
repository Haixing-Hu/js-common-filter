////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * The default array element separator.
 */
const DEFAULT_SEPARATOR = ' ';

/**
 * Converts the specified array to a string with the specified separator.
 *
 * @param {Array} array
 *     The array to be converted.
 * @param {string} separator
 *     The separator, if not specified, the default separator will be used.
 * @returns {string}
 *     The string converted from the specified array.
 * @author Haixing Hu
 */
function arrayToString(array, separator) {
  if (!array || array.length === 0) {
    return '';
  }
  const sep = (separator ?? '') === '' ? DEFAULT_SEPARATOR : separator;
  let result = String(array[0]);
  for (let i = 1; i < array.length; ++i) {
    result += sep + String(array[i]);
  }
  return result;
}

export default arrayToString;
