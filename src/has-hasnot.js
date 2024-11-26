////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Format the boolean value to has/hasn't.
 *
 * @param value
 *    the boolean value.
 * @return
 *    the chinese display name of the has or hasn't. If the value is `true`, then
 *    return '有'; otherwise, return '无'. If the value is not a boolean value,
 *    nor a `Boolean` object, then return '无'.
 * @author Haixing Hu
 */
function formatHasHasnot(value) {
  if (typeof value === 'boolean' || (value instanceof Boolean)) {
    return (value ? '有' : '无');
  } else {
    return '无';
  }
}

export default formatHasHasnot;
