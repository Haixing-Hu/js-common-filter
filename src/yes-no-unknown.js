////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Format the boolean value to yes/no/unknown.
 *
 * @param {boolean} value
 *     the boolean value.
 * @returns {string}
 *     the chinese display name of the yes or no or unknown. If the value is
 *     `true`, returns '是'; if the value is `false`, returns '否'; if the value
 *     is `null` or `undefined`, returns '未知'. If the value is not a boolean
 *     value, nor a `Boolean` object, returns '未知'.
 * @author Haixing Hu
 */
function formatYesNoUnknown(value) {
  if (typeof value === 'boolean' || (value instanceof Boolean)) {
    return (value ? '是' : '否');
  } else {
    return '未知';
  }
}

export default formatYesNoUnknown;
