/**
 * 判断密码是否有效
 *
 * @param password 密码字符串
 * @param min 密码最小长度
 * @param max 密码最大长度
 * @returns 返回布尔值，表示密码是否有效
 */

const isPasswordValid = (
    password: string,
    min: number = 8,
    max: number = 16
): boolean => {
    const passwordRegex: RegExp = new RegExp(
        `^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]{${min},${max}}$`
    );
    return passwordRegex.test(password);
};

export default isPasswordValid;
export { isPasswordValid };
