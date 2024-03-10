import {navbar} from "vuepress-theme-hope";

export default navbar([
    "",
    {
        text: "软件 Software",
        link: "/software/CLion",
        icon: "/svgs/software.svg",
    },
    {
        text: "计算机组成原理",
        link: "/major/os-principle/os-principle01",
        icon: "/svgs/os-principle.svg",
    },
    {
        text: "操作系统",
        link: "/software/os/os-01",
        icon: "/svgs/os.svg",
    },
    {
        text: "数据结构",
        link: "/data-structure/data-structure01",
        icon: "/svgs/data-structure.svg",
    },
    {
        text: "关于我 ",
        icon: "/svgs/CBQ.svg",
        link: "/ABOUTME.md"
    },
    {
        text: "更新日志 ",
        icon: "/svgs/update.svg",
        link: "/CHANGELOG.md"
    }
]);
