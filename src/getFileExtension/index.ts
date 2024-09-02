/**
 * 获取文件扩展名
 *
 * @param filename 文件名
 * @returns 文件扩展名，如果文件名不包含扩展名则返回空字符串
 */

function getFileExtension(filename: string): string {
    const lastIndex = filename.lastIndexOf(".");
    return lastIndex !== -1 ? filename.slice(lastIndex + 1) : "";
}
export default getFileExtension;
export { getFileExtension };
