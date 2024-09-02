/**
 * 移除数组中指定的条目
 * @param array - 待操作的数组
 * @param item - 要删除的元素
 * @returns 删除成功返回true，否则返回false
 */

function ArrayRemove<T>(array: T[], item: T) {
    const index = array.indexOf(item);
    if (index >= 0) {
        array.splice(index, 1);
        return true;
    }
    return false;
}
export default ArrayRemove;
export { ArrayRemove };
