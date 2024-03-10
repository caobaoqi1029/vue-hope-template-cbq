import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "计算机科学与技术 😀",
            collapsible: true,
            icon: "/svgs//major.svg",
            prefix: "major/",
            link: "major/",
            children: "structure",
        },
        {
            text: "数据结构 🧑‍💻",
            collapsible: true,
            icon: "/svgs//data-structure.svg",
            prefix: "data-structure/",
            link: "data-structure/",
            children: "structure",
        },        {
            text: "软件 Software 🐓",
            collapsible: false,
            icon: "/svgs//software.svg",
            prefix: "software/",
            link: "software/",
            children: "structure",
        },
        {
            text: "关于我 ",
            icon: "/svgs//CBQ.svg",
            link: "/ABOUTME.md"
        },
        {
            text: "更新日志 ",
            icon: "/svgs//update.svg",
            link: "/CHANGELOG.md"
        }
    ],
});
