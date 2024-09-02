/**
 * 将字节数转换为指定的存储单位（KB或MB）
 * @param {number} bytes - 字节数
 * @param {'KB' | 'MB'} [unit='MB'] - 目标单位，默认为'MB'
 * @returns {string} 转换后的存储大小（带单位）
 */
function convertBytesToUnit(bytes: number, unit = "MB"): string | number {
    const units: { [key: string]: number } = {
        KB: 1024,
        MB: 1024 * 1024,
    };

    if (!units.hasOwnProperty(unit)) {
        return bytes;
    }
    const convertedValue = bytes / units[unit];
    return `${convertedValue.toFixed(3)} ${unit}`;
}

export default convertBytesToUnit;
