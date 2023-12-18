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
 *     the chinese display name of the yes or no.
 * @author Haixing Hu
 */
function formatYesNo(value) {
  return (value ? '是' : '否');
}

export default formatYesNo;
