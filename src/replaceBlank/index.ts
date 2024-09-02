/**
 * 替换字符串中的空白字符
 *
 * @param str 待处理的字符串
 * @returns 返回处理后的字符串，若传入null或undefined则返回空字符串
 */
const replaceBlank = (str: string) => {
    return str ? str.replace(/\s+/g, "") : "";
};
export default replaceBlank;
export { replaceBlank };
