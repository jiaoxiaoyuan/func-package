/**
 * 拼接名称列表
 *
 * @param data 包含名称的数据项数组
 * @param key 数据项中名称对应的键名，默认为 'name'
 * @returns 拼接后的名称字符串，使用逗号分隔
 */

interface DataItem {
    id: string;
    name: string;
    [key: string]: any;
}
function concatenateNames(
    data: DataItem[],
    key: keyof DataItem = "name"
): string {
    const names = data.map((item) => item[key]);

    return names.join(",");
}

export default concatenateNames;
