/**
 * 根据指定的字段数组过滤数组
 *
 * @param arr1 需要过滤的数组
 * @param arr2 包含有效代码的字符串数组
 * @param fieldName 用于过滤的字段名
 * @returns 过滤后的数组
 */

function filterArrayByCodes(
    arr1: any[],
    arr2: string[],
    fieldName: string
): any[] {
    // 使用一个箭头函数来动态地获取属性值
    return arr1.filter((item) => {
        // 确保item上有该属性，避免TypeError
        return fieldName in item && arr2.includes(item[fieldName]);
    });
}
export default filterArrayByCodes;
export { filterArrayByCodes };
