/**
 * 驼峰命名转横线命名
 * @param str
 * @returns
 */
function hyphenate(str: string, flag = '-') {
  const hyphenateReg = /([a-z0-9_])([A-Z])|([A-Z])([A-Z][a-z])/g;
  return str.replace(hyphenateReg, `$1$3${flag}$2$4`).toLowerCase();
}
export default hyphenate;
