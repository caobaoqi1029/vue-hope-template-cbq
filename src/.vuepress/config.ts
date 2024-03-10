import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/vue-hope-template-cbq/",

    lang: "zh-CN",
    title: "Vue-Hope-Template-Cbq",
    description: "vue-hope-template-cbq",

    theme,
});
