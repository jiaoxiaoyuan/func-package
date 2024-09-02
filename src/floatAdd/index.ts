/**
 * 浮点数加法
 *
 * @param num1 第一个加数
 * @param num2 第二个加数
 * @returns 返回两个浮点数相加的结果
 * @throws 如果传入的不是数字类型，会打印警告信息并返回NaN
 */

export default function floatAdd(num1: number, num2: number): number {
    if (!(isNumber(num1) || isNumber(num2))) {
        console.warn("Please pass in the number type");
        return NaN;
    }
    let r1, r2, m;
    try {
        r1 = num1.toString().split(".")[1].length;
    } catch (error) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split(".")[1].length;
    } catch (error) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (num1 * m + num2 * m) / m;
}
function isNumber(num: any): boolean {
    return typeof num === "number" && !isNaN(num);
}
