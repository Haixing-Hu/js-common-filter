////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * The character used to represent the mask.
 */
const MASK_CHAR = '*';

/**
 * A function used to format a string with privacy masks.
 *
 * @param {string} str
 *     the string to be masked.
 * @returns {string}
 *     the privacy masked string.
 * @author Haixing Hu
 */
function privacyMask(str) {
  if (str) {
    const n = str.length;
    if (n <= 1) {
      return str;
    } else if (n <= 2) {
      return str.substring(0, 1) + MASK_CHAR;
    } else if (n <= 3) {
      return str.substring(0, 1) + MASK_CHAR + str.substring(2, 3);
    } else if (n <= 4) {
      return str.substring(0, 1) + MASK_CHAR + MASK_CHAR + str.substring(3, 4);
    } else if (n <= 5) {
      return str.substring(0, 2) + MASK_CHAR + MASK_CHAR + str.substring(4, 5);
    }
    const m = Math.trunc(n / 2);
    const k = Math.trunc((n - m + 1) / 2);
    let result = str.substring(0, k);
    for (let i = 0; i < m; ++i) {
      result += MASK_CHAR;
    }
    result += str.substring(k + m, n);
    return result;
  }
  return '';
}

export default privacyMask;
