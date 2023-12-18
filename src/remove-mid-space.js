////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 待去除的空格字符的正则表达式。
 *
 * 目前只包含ASCII空格，以及全角中文空格。
 */
const SPACE_REGEXP = /[ 　]/g;

/**
 * 去除字符串中的空格，包括头尾的空格和中间的空格。
 *
 * @param {String} str
 *     待处理的字符串。
 * @return
 *     将该字符串中所有空格去除后的新字符串。
 * @author 胡海星
 */
function removeMidSpace(str) {
  return str ? str.replace(SPACE_REGEXP, '') : '';
}

export default removeMidSpace;
