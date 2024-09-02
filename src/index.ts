// import pageTrack from 'src/formDataToJson';

/**
 *  @system 系统相关基础函数
 */
export * from "./system/Versions";
export { default as Versions } from "./system/Versions";
// export * from "./system/WebSocketOperator";

/**
 * @browser 浏览器相关函数
 */
export { default as getRuntimeEnv } from "./browser/getRuntimeEnv";
export { default as getSelection } from "./browser/getSelection";
export { default as redirect } from "./browser/redirect";
export { default as store } from "./browser/store";
export { default as xCookie } from "./browser/XCookie";
export * from "./browser/indexDB";
export { default as IndexedDBHelper } from "./browser/indexDB";

/**
 * @dom dom操作
 */
export { default as downloadFileWithText } from "./dom/donwloadFileWithText";
export { default as downloadFileWithUrl } from "./dom/downloadFileWithUrl";
export { default as $ } from "./dom/getDom";
export { default as getDomText } from "./dom/getDomText";
export { default as getDomPageXY } from "./dom/getDomPageXY";
export { default as getDomScreenXY } from "./dom/getDomScreenXY";
export { default as xss } from "./dom/xss";

/**
 * 字符串操作
 */
export { default as base64 } from "./base64";
export { default as calculateMemory } from "./calculateMemory";
export { default as camelize } from "./camelize";
export { default as charCount } from "./charCount";
export { default as completeIp } from "./completeIp";
export { default as designateRepeat } from "./designateRepeat";
export { default as formatNumber } from "./formatNumber";
export { default as formatPercent } from "./formatPercent";
export { default as getRepeatCharacter } from "./getRepeatCharacter";
export { default as hyCompact } from "./hyCompact";
export { default as hyphenate } from "./hyphenate";
export { default as randomStr } from "./randomStr";
export { default as repeat } from "./repeat";
export { default as timeCutStr } from "./timeCutStr";
export { default as uuid } from "./uuid";
export { default as concatenateNames } from "./concatenateNames";
export { default as replaceBlank } from "./replaceBlank";
export { default as getFileExtension } from "./getFileExtension";

/**
 *  数据结构相关
 */
export { default as arrayToListNode } from "./arrayToListNode";
export { default as binaryTree } from "./binaryTree";
export { default as BothLinkedList } from "./bothLinkedList";
export { default as cloneDeep } from "./cloneDeep";
export { default as dateCalculate } from "./dateCalculate";
export { default as formDataToJson } from "./formDataToJson";
export { default as formatDate } from "./formatDate";
export { default as getRawType } from "./getRawType";
export { default as linkListToArray } from "./linkListToArray";
export { default as obj2url } from "./obj2url";
export { default as PriorityQueue } from "./priorityQueue";
export { default as timeSub } from "./timeSub";
export { default as transformArray } from "./transformArray";
export { default as transformTree } from "./transformTree";
export { default as url2obj } from "./url2obj";
export { default as ArrayRemove } from "./ArrayRemove";
export { default as ArrayClear } from "./ArrayClear";
export { default as filterArrayByCodes } from "./filterArrayByCodes";

/**
 * 图片处理函数
 */
export { default as compressImg } from "./compressImg";
export { default as file2img } from "./file2img";
export { default as genRandomColor } from "./genRandomColor";
export { default as hex2rgba } from "./hex2rgba";
export { default as rgba2obj } from "./rgba2obj";

/**
 * js高级函数
 */
export { default as debounce } from "./debounce";
export { default as parser } from "./parser";
export { default as sleep } from "./sleep";
export { default as throttle } from "./throttle";

/**
 *  常用算法和数据结构
 */
export { default as bubbleSort } from "./bubbleSort";
export { default as quickSort } from "./quickSort";

/**
 *  常用判断函数
 */
export { default as dataDesensitization } from "./dataDesensitization";
export { default as isArray } from "./isArray";
export { default as isEmail } from "./isEmail";
export { default as isEmpty } from "./isEmpty";
export { default as isIdCard } from "./isIdCard";
export { default as isObjEqual } from "./isObjEqual";
export { default as isPc } from "./isPc";
export { default as isPhone } from "./isPhone";
export { default as lang } from "./lang";
export { default as maxBy } from "./maxBy";
export { default as minBy } from "./minBy";
export { default as regex } from "./regex";
export { default as isPasswordValid } from "./isPasswordValid";

/**
 *  科学计算
 */

export { default as arrayRepeat } from "./arrayRepeat";
export { default as average } from "./average";
export { default as capitalizedAmount } from "./capitalizedAmount";
export { default as difference } from "./difference";
export { default as factorial } from "./factorial";
export { default as fibonacci } from "./fibonacci";
export { default as floatAdd } from "./floatAdd";
export { default as floatDiv } from "./floatDiv";
export { default as floatMul } from "./floatMul";
export { default as floatSub } from "./floatSub";
export { default as random } from "./random";
export { default as shuffle } from "./shuffle";
export { default as sum } from "./sum";
export { default as convertBytesToUnit } from "./convertBytesToUnit";
export { default as arraySum } from "./arraySum";

/**
 *  几何计算
 */

export { default as coordinatesInCircle } from "./coordinatesInCircle";
export { default as coordinatesInRect } from "./coordinatesInRect";
export { default as judgePointInCircle } from "./judgePointInCircle";
