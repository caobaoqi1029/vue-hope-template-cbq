import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
    darkmode: "enable",

    author: {
        name: "Mr.CBQ",
        url: "https://gitee.com/caobaoqi",
        email: "2024cbq@gmail.com"
    },

    iconAssets: "fontawesome-with-brands",

    logo: "https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/go.svg",

    repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "src",
    navbar,
    sidebar,
    locales: {
        "/": {
            footer:
                "<img  height=\"50px\" width=\"220px\"  src=\"https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/66666666666.png\" alt=\"Typing SVG\" />",
        },
    },
    displayFooter: true,

    encrypt: {
        config: {
            "/demo/encrypt.html": ["CBQ"],
        },
    },
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    plugins: {
        comment: {
            provider: "Giscus",
            repo: "caobaoqi1029/vue-hope-template-cbq",
            repoId: "R_kgDOLeIOww",
            category: "Announcements",
            categoryId: "DIC_kwDOLeIOw84Cd28J",
        },

        components: {
            components: ["Badge", "VPCard", "BiliBili"],
            rootComponents: {
                notice: [
                    {
                        path: "/",
                        title: "Info: 😀",
                        content:
                            '<ul><li>士不可以不弘毅,任重而道远</li><li>晋中学院-CBQ</li></ul><div class="addthis_inline_follow_toolbox_qssu"></div>',
                        actions: [
                            {
                                text: "start →",
                                link: "./major/",
                                type: "primary",
                            },
                        ],
                        showOnce: false,
                    },
                ],
            },
        },

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
            component: true,
            demo: true,
            figure: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            mark: true,
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,

            // 在启用之前安装 chart.js
            // chart: true,

            // insert component easily

            // 在启用之前安装 echarts
            // echarts: true,

            // 在启用之前安装 flowchart.ts
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            // 在启用之前安装 katex
            // katex: true,

            // 在启用之前安装 mathjax-full
            // mathjax: true,

            // 在启用之前安装 mermaid
            // mermaid: true,

            // playground: {
            //   presets: ["ts", "vue"],
            // },

            // 在启用之前安装 reveal.js
            // revealJs: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },

            // 在启用之前安装 @vue/repl
            // vuePlayground: true,

            // install sandpack-vue3 before enabling it
            // sandpack: true,
        },

        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
