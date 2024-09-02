/**
 * 计算数组中指定字段值的总和
 *
 * @param data 数据数组
 * @param fieldName 字段名称
 * @returns 字段值的总和
 */

function arraySum(data: any[], fieldName: string): number {
    let sum = 0;

    // 遍历数据数组
    for (const item of data) {
        // 使用方括号表示法访问对象的属性
        const fieldValue = item[fieldName];

        // 确保值是数字
        if (typeof fieldValue === "number") {
            sum += fieldValue;
        } else if (
            typeof fieldValue === "string" &&
            !isNaN(Number(fieldValue))
        ) {
            sum += Number(fieldValue);
        }
    }

    return sum;
}

export default arraySum;

// 示例数据
// const data = [
//     { "￥0": 1, "￥1": 12 },
//     { "￥0": "2", "￥1": 13 },
// ];

// // 调用函数并打印结果
// const result = arraySum(data, "￥0");
// console.log(result); // 输出 3
