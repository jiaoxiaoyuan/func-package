/**
 * 比较两个版本号的大小
 *
 * @param version1 第一个版本号字符串，格式为 x.y.z 或 x.y.z-tag
 * @param version2 第二个版本号字符串，格式为 x.y.z 或 x.y.z-tag
 * @returns 返回值小于0，表示 version1 小于 version2；返回值等于0，表示 version1 等于 version2；返回值大于0，表示 version1 大于 version2
 */
const Versions = (version1: string, version2: string): number => {
    // 分别提取主版本号和标签
    const [mainVer1, tag1] = version1.split(/-(.+)/).map((s) => s.trim());
    const [mainVer2, tag2] = version2.split(/-(.+)/).map((s) => s.trim());

    // 比较主版本号
    let arr1: number[] = mainVer1.split(".").map(Number);
    let arr2: number[] = mainVer2.split(".").map(Number);

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        let num1 = arr1[i] || 0;
        let num2 = arr2[i] || 0;

        if (num1 < num2) {
            return -1;
        } else if (num1 > num2) {
            return 1;
        }
    }

    // 如果主版本号相同，则比较标签（如果有）
    if (tag1 && tag2) {
        // 简单假设标签只是数字，实际情况可能更复杂，可能需要更详细的解析逻辑
        const tagNum1 = parseInt(tag1.replace(/\D/g, ""), 10) || 0; // 移除非数字字符，转换为整数
        const tagNum2 = parseInt(tag2.replace(/\D/g, ""), 10) || 0;
        if (tagNum1 < tagNum2) {
            return -1;
        } else if (tagNum1 > tagNum2) {
            return 1;
        }
    } else if (tag1) {
        // 有标签的版本应视为小于无标签的版本
        return -1;
    } else if (tag2) {
        return 1;
    }

    // 主版本号和标签都相同
    return 0;
};
export default Versions;
