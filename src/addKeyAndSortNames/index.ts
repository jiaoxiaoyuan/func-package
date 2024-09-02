interface NameWithKey {
    name: string;
    [key: string]: any; // 允许添加其他属性
    key: string;
}

/**
 * 为名字数组添加键并排序
 *
 * @param names 名字数组，每个元素是一个包含name属性的对象
 * @returns 返回一个NameWithKey类型的数组，数组中的元素包含name和key属性，按name属性进行排序
 */

function addKeyAndSortNames(
    names: { name: string; [key: string]: any }[]
): NameWithKey[] {
    const namesWithKeys: NameWithKey[] = names.map(({ name }) => ({
        name,
        key: name.charAt(0).toLowerCase(), // 提取名字的首个字母并转换为小写
    }));

    return namesWithKeys.sort((a, b) =>
        a.name.localeCompare(b.name, "zh-Hans-CN", { sensitivity: "base" })
    );
}

export default addKeyAndSortNames;

// 示例用法
// const names = [
//     { name: "张三" },
//     { name: "李四" },
//     { name: "王五" },
//     { name: "赵六" },
// ];

// const sortedNamesWithKeys = addKeyAndSortNames(names);
// console.log(sortedNamesWithKeys);
