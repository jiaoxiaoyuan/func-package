/**
 * 清空数组
 * @param array 要清空的数组
 * @returns 清空后的数组
 */

function ArrayClear<T>(array: T[]) {
    return array.splice(0, array.length);
}

export default ArrayClear;
