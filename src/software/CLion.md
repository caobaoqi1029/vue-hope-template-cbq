---
title: CLion 的安装与配置
icon: /svgs/clion.svg
order: 1
category:
  - 软件 Software
  - MD
---

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109193927918.png" alt="image-20240109193927918" style="zoom:67%;" />

## 一、安装 CLion

CLion 是由 JetBrains 开发的一款跨平台的集成开发环境（IDE），专门为 C 和 C++ 语言设计。以下是关于 CLion 的一些主要特点：

1. **跨平台支持**：CLion 支持 Windows、macOS 和 Linux 操作系统，使得开发者可以在不同的平台上进行编程和调试。

2. **智能编辑**：它提供了代码自动完成、重构和代码导航等智能编辑功能，这些功能可以帮助开发者提高编码效率。

3. **代码分析**：CLion 内置了代码质量分析工具，可以实时检测代码中的各种错误和潜在问题。

4. **强大的调试器**：集成了 GDB 或 LLDB 调试器，支持本地调试和远程调试，让开发者能够轻松地找到并修复代码中的错误。

5. **集成版本控制**：支持 Git、Subversion、Mercurial 等多种版本控制系统，方便开发者进行代码管理。

6. **项目模板和构建系统支持**：CLion 支持多种项目模板，并且与 CMake、Gradle 等构建系统集成，使得项目构建和管理变得更加容易。

7. **插件生态**：JetBrains 提供了丰富的插件生态系统，开发者可以根据需要安装各种插件，扩展 IDE 的功能。

8. **多语言支持**：除了 C 和 C++，CLion 还支持其他语言，如 Python、JavaScript 等，这为多语言项目提供了便利。

CLion 是一个适用于专业开发者的强大工具，它通过提供高效的编码工具、强大的调试功能和多样的集成选项，极大地提高了 C/C++ 开发的效率和质量。

## 1.1 下载

> - Link: [Download-CLion](https://www.jetbrains.com/zh-cn/clion/download/#section=windows)

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109194011371.png" alt="image-20240109194011371" style="zoom:67%;" />

## 1.2 安装激活

> 激活方式可采用:
>
> - 学生授权方式 (参见：[Jetbrains 学生授权](https://zhuanlan.zhihu.com/p/676651672 ))

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109194209215.png" alt="image-20240109194209215" style="zoom:67%;" />

## 1.3 CLion 启动 !

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109194239101.png" alt="image-20240109194239101" style="zoom:67%;" />

## 二、配置

> 此部分配置参考自：[哔哩哔哩 Up-卡姆姬-CLion安装流程与注意事项](https://www.bilibili.com/video/BV1kM411X7uA/?spm_id_from=333.337.search-card.all.click&vd_source=9071a50b607525e6db8ba7b49bc960f5)

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109194446471.png" alt="image-20240109194446471" style="zoom:67%;" />

## 2.1 C 项目的创建

> 汉化：Chinese (Simplified) Language Pack / 中文语言包

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109194918868.png" alt="image-20240109194918868" style="zoom:67%;" />

> 作为学习使用我们一般采用 **C99 标准** 即可

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109194809203.png" alt="image-20240109194809203" style="zoom:67%;" />

## 2.2 CMake 文件的配置

> 通常情况下在 CLion 中 **一个工程默认只有一个 main 函数**，但在学习阶段我们通常采用 **一个工程中配置多个 main  函数** 的方式来学习，我们可以通过配置 CMake 文件来达到这一目的。

```cmake
cmake_minimum_required(VERSION 3.27)
project(qkxg_c_2022 C CXX) # 修改为自己项目的名称 project(项目名称 C)
# 设定 C 语言和 C++ 版本
set(CMAKE_C_STANDARD 99)
set(CMAKE_CXX_STANDARD 20)

# 设定构建运行路径，避免污染根目录
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/.archive)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/.library)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/.runtime)
set(LIBRARY_OUTPUT_PATH ${CMAKE_SOURCE_DIR}/.path)

# 遍历项目根目录下所有的 .c 文件，自动添加
file(GLOB_RECURSE files *.c **/*.c *.cpp **/*.cpp)
foreach (file ${files})
    string(REGEX REPLACE ".+/(.+)\\..*" "\\1" exe ${file})
    add_executable(${exe} ${file}
)
    message(\ \ \ \ --\ \[${exe}.c\]\ will\ be\ compiled\ to\ \'.runtime/${exe}.exe\')
endforeach ()
```

> 配置好后我们每次创建新的 C 文件仅需: 项目(右键) --> 重新加载 CMake 项目即可

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109195026116.png" alt="image-20240109195026116" style="zoom:67%;" />

> 文件介绍

- .archive 
- .runtime 运行环境
- src 源代码

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109195158140.png" alt="image-20240109195158140" style="zoom:67%;" />

> 注意事项：

- 源代码中 c 文件的名称即使位于不同级目录也不能相同 (最后要编译为 可执行文件（以文件名为可执行文件的名）因此不可以重复)

## 2.3 C 文件模板配置

> CLion 默认创建文件时 .cpp 是其首选项我们可以通过下面的配置来使得 .c 为首选项

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109195809769.png" alt="image-20240109195809769" style="zoom:67%;" />

> 默认 .c 文件模板,我们可以通过配置文件模板的方式来让编译器生成的文件包含默认指定的内容

![image-20240109195557783](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109195557783.png)

这样我们新创建的 .c 文件便会自动生成下面的内容，其中 `$NAME` 用于替换文件名

```c
void ${NAME}_demo01();

void ${NAME}_demo02();

\#include "../common/cbq.h"

/**
 * @author caobaoqi
 * @name ${NAME}
 * @date ${DATE} ${TIME}
 */
int main() {
    ${NAME}_demo01();
    ${NAME}_demo02();
    return 0;
}

void ${NAME}_demo01(){
    printHeader("${NAME}_demo01");
    
    printFooter("${NAME}_demo01");

}

void ${NAME}_demo02(){
    printHeader("${NAME}_demo02");
    
    printFooter("${NAME}_demo02");
}
```

## 2.4 编写常用头文件

> 我们可以通过头文件的方式引入常用的功能

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109200215808.png" alt="image-20240109200215808" style="zoom:67%;" />

```c
TODO
```

## 2.5 main 函数模板配置

> CLion 中默认情况没有默认的 main 模板

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109200028507.png" alt="image-20240109200028507" style="zoom:67%;" />

```c
#include "../common/cbq.h"

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

![image-20240109200300286](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109200300286.png)

```c
TODO
```

这样我们便可以在 c 文件中通过 `main ` 和  `func ` 的方式快速生成相应的模板

![image-20240109200422998](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109200422998.png)

## 三、插件安装

## 3.1 Ikun Progress

> 你干嘛 ~，哎呦 ！ --> 你是 IKun 吗 ?  🐔🐔🐔

![image-20240110121606831](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121606831.png)

## 3.2 Better Higlights

> 提供彩色注释

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121335456.png" alt="image-20240110121335456" style="zoom: 67%;" />

![image-20240110121350713](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121350713.png)

## 3.3 CodeGlance Pro

> 代码缩略图，便于快速定位代码

![image-20240110121456174](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121456174.png)

![image-20240110121514978](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121514978.png)

## 3.4 Atom Material Icons

> 文件图标

![image-20240110121733866](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121733866.png)

![image-20240110121750733](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121750733.png)

## 3.5 Rainbow Brackets

> 彩虹括号

![image-20240110121814917](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121814917.png)

![image-20240110121828608](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110121828608.png)
