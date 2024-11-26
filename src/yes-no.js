////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Format the boolean value to yes/no.
 *
 * @param {boolean} value
 *     the boolean value.
 * @returns {string}
 *     the chinese display name of the yes or no. If the value is `true`, then
 *     return '是'; otherwise, return '否'. If the value is not a boolean value,
 *     nor a `Boolean` object, then return '否'.
 * @author Haixing Hu
 */
function formatYesNo(value) {
  if (typeof value === 'boolean' || (value instanceof Boolean)) {
    return (value ? '是' : '否');
  } else {
    return '否';
  }
}

export default formatYesNo;
