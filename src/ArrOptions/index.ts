/**
 * 将数组转换为带有指定值和标签的对象数组
 *
 * @param arr 原始数组
 * @param value 值字段名
 * @param label 标签字段名
 * @param type 值字段类型，默认为字符串类型
 * @param FieldName 可选字段名1
 * @param FieldName2 可选字段名2
 * @returns 转换后的对象数组
 */

const ArrOptions = (
    arr: any[],
    value: string | number,
    label: string,
    type: string = "string",
    FieldName?: string,
    FieldName2?: string
) => {
    return arr.map((item) => {
        const result: any = {
            value: type === "string" ? String(item[value]) : item[value],
            label: item[label],
        };

        if (FieldName) {
            result[FieldName] = item[FieldName];
        }

        if (FieldName2) {
            result[FieldName2] = item[FieldName2];
        }

        return result;
    });
};
export default ArrOptions;
export { ArrOptions };
