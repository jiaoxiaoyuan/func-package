/**
 * 获取当前运行环境,返回运行环境的集合判断
 * @returns 返回一个对象，包含以下字段：
 *  - isWeex: 是否运行在Weex环境中
 *  - isIE: 是否为IE浏览器
 *  - isIE9: 是否为IE9浏览器
 *  - isEdge: 是否为Edge浏览器
 *  - isAndroid: 是否为Android系统
 *  - isIOS: 是否为iOS系统
 *  - isChrome: 是否为Chrome浏览器
 */

function getRuntimeEnv() {
    // 判断是否在浏览器环境中
    const inBrowser = typeof window !== "undefined";
    // 判断是否在 Weex 环境中
    const inWeex =
        typeof window.WXEnvironment !== "undefined" &&
        !!window.WXEnvironment.platform;
    // 获取 Weex 的平台信息，并转为小写
    const weexPlatform = inWeex && window.WXEnvironment.platform.toLowerCase();

    //浏览器 UA 判断、获取浏览器的 User-Agent 并转为小写
    const UA = inBrowser && window.navigator.userAgent.toLowerCase();
    // 判断是否为 IE 浏览器
    const isIE = UA && /msie|trident/.test(UA);
    // 判断是否为 IE9
    const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
    // 判断是否为 Edge 浏览器
    const isEdge = UA && UA.indexOf("edge/") > 0;
    // 判断是否在 Android 设备上运行
    const isAndroid =
        (UA && UA.indexOf("android") > 0) || weexPlatform === "android";
    // 判断是否在 iOS 设备上运行
    const isIOS =
        (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === "ios";
    // 判断是否在 Chrome 浏览器中运行
    const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    // 返回环境信息对象
    return {
        isWeex: inWeex,
        isIE,
        isIE9,
        isEdge,
        isAndroid,
        isIOS,
        isChrome,
    };
}
export default getRuntimeEnv;
