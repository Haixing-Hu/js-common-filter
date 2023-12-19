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
 *    the chinese display name of the has or hasn't.
 * @author Haixing Hu
 */
function formatHasHasnt(value) {
  return (value ? '有' : '无');
}

export default formatHasHasnt;
