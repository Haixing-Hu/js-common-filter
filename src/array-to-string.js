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
 * @param {array} array
 *     The array to be converted.
 * @param {string} separator
 *     The separator, if not specified, the default separator will be used.
 * @returns {string}
 *     The string converted from the specified array.
 * @author Haixing Hu
 */
function arrayToString(array, separator) {
  if (array === undefined || array === null || array.length === 0) {
    return '';
  }
  if (!separator) {
    separator = DEFAULT_SEPARATOR;
  }
  let result = '';
  for (let i = 0; i < array.length; ++i) {
    if (i > 0) {
      result += separator;
    }
    result += String(array[i]);
  }
  return result;
}

export default arrayToString;
