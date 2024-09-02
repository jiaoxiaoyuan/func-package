import { resolve } from "path";

const config = {
    mode: "site",
    title: "func-package",
    description: "函数库, 面向复杂业务场景的 js 类库",
    outputPath: "./funct-dist",
    base: "/",
    publicPath: "/",
    favicon: "https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png",
    logo: "https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png",
    alias: {},
    hash: true,
    exportStatic: {},
    theme: {},
    navs: [
        null,
        // {
        //     title: "第二项",
        //     path: "/ts",
        // },
        // {
        //     title: "前端笔记",
        //     path: "链接是可选的",
        //     // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
        //     children: [
        //         { title: "第一项", path: "https://d.umijs.org" },
        //         { title: "第二项", path: "/note" },
        //     ],
        // },
    ],

    metas: [
        {
            name: "keywords",
            content: "dumi, base on umi",
        },
        {
            name: "description",
            content: "📖 为组件开发场景而生的文档工具",
        },
    ],
};

if (process.env.NODE_ENV !== "development") {
    config.ssr = {};
}

export default config;
