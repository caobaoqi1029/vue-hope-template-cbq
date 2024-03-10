---
title: C-Language
icon: /svgs/c.svg
order: 1
category:
  - 数据结构
  - MD
---

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110122537240.png" alt="image-20240110122537240" style="zoom:67%;" />

## INFO

> 好用的一些网站：
>
> - [Learn-C](https://www.learn-c.org/)
> - [青空の霞光-IT 柏码](https://www.itbaima.cn/)

---

> Link: [CLion 的安装与配置](../software/Clion)

| Tools | Description  | Version  |
| ----- | ------------ | -------- |
| CLion | 集成开发环境 | 2023.3.2 |
| C     | C 标准       | C99      |

---

> - 参考自: 青空の霞光-C 教程 Link: [https://www.bilibili.com/video/BV1Cr4y137os/?vd_source=9071a50b607525e6db8ba7b49bc960f5](https://gitee.com/link?target=https%3A%2F%2Fwww.bilibili.com%2Fvideo%2FBV1Cr4y137os%2F%3Fvd_source%3D9071a50b607525e6db8ba7b49bc960f5)
> - 本部分代码托管在 Link: https://gitee.com/cola777jz/qkxg_c_2022 项目的 src/basic 下：

![image-20240108122000830](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240108122000830.png)

![image-20240109201927766](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240109201927766.png)

## 一、基本数据类型与运算符

## 1.1 C 语言中的运算

::: danger 表达式运算后的值为表达式本身的值

- eg:  `int a = (3 + (c = 2)) * 6 中 (c=2) ==> 2`
- result: `a = (3 + 2) * 6 = 30`

```c
void basic01_demo01() {
    printHeader("basic01_demo01");

    int c;
    int a = (3 + (c = 2)) * 6;
    printf("a = %d", a);

    printFooter("basic01_demo01");
}
```

:::

---

::: danger 逗号运算符从前往后依次执行，赋值结果是最后边的结果

- eg: `a = (b = 5, c = b + 8) 中 (b = 5, c = b + 8)  ==> c=13`
- result: `a = 13`

```c
void basic01_demo02() {
    printHeader("basic01_demo02");

    int b, c;
    int a = (b = 5, c = b + 8);
    printf("a = %d", a);

    printFooter("basic01_demo02");
}

```

:::

## 二、流程控制

## 2.1 条件控制

::: danger if-else if 适用于对 范围 判断

```c
void basic01_demo03() {
    printHeader("basic01_demo03");

    int score = 0;
    printf("Please Input Your Score: \n");
    scanf_s("%d", &score);
    if (score >= 90) {
        printf("Score is: %d Level is: Very Good", score);
    } else if (score >= 70) {
        printf("Score is: %d Level is: Good", score);
    } else if (score >= 60) {
        printf("Score is: %d Level is: just so so", score);
    } else {
        printf("Score is: %d Level is: bad", score);
    }

    printFooter("basic01_demo03");
}
```

:::

---

::: danger switch 适用于对 精确值 进行判断

```c
void basic01_demo04() {
    printHeader("basic01_demo04");

    char level = ' ';
    printf("Please Input Your Level (A|B|C): \n");
    scanf_s(" %c", &level);
    switch (level) {
        case 'A':
            printf("Level is: %c GO to 985 ", level);
            break;
        case 'B':
            printf("Level is:  %c GO to 211 ", level);
            break;
        case 'C':
            printf("Level is:  %c GO to One ", level);
            break;
        default:
            printf("Level is:  %c GO to Two ", level);
            break;
    }

    printFooter("basic01_demo04");
}
```

:::

---

::: tip scanf_s 的使用

当在 `basic01_demo03` 中使用 `scanf_s` 读取分数时，它读取了你输入的整数值但没有消耗按下回车键时生成的换行符 `（\n）` 这个换行符留在了输入缓冲区中然后当执行到 `basic01_demo04` 并调用 `scanf_s ` 来读取一个字符时，它立即读取了缓冲区中剩下的这个换行符而不是等待新的输入。这就是为什么看起来像是跳过了输入为了解决这个问题，可以在 `basic01_demo04` 的 `scanf_s` 格式字符串中的 `%c` 前面加一个空格这个空格告诉 `scanf_s` 跳过可能存在的任何空白字符（包括换行符）即 `scanf_s(" %c", &level)`

:::

## 2.2 循环控制

::: warning 水仙花数

水仙花数（Narcissistic number）也被称为超完全数字不变数（pluperfect digital invariant, PPDI）自恋数、自幂数、阿姆斯壮数或阿姆斯特朗数（Armstrong number）水仙花数是指 一个 3 位数，它的每个位上的数字的 3 次幂之和等于它本身 现在请你设计一个 C 语言程序，打印出所有 1000 以内的水仙花数。

eg: 1^3 + 5^3+ 3^3 = 153

```c
void basic01_demo05() {
    printHeader("basic01_demo05");

    int num = 1000;
    int first = 0, second = 0, third = 0;
    while (num != -1) {
        third = num / 100;
        second = num / 10 % 10;
        first = num % 10;
        if (num == ((first * first * first) + (second * second * second) + (third * third * third))) {
            printf("num = %d is PPDI\n", num);
        }
        num--;
    }

    printFooter("basic01_demo05");
}
```

:::

---

::: warning 九九乘法表

```c
void basic01_demo06() {
    printHeader("basic01_demo06");

    for (int i = 1; i <= 9; ++i) {
        for (int j = 1; j <= i; ++j) {
            printf("%d x %d = %d \t", j, i, i * j);
        }
        printf("\n");
    }

    printFooter("basic01_demo06");
}
```

:::

## 2.3 递归

::: warning 斐波那契数列

斐波那契数列（Fibonacci sequence）又称黄金分割数列因数学家莱昂纳多·斐波那契（Leonardo Fibonacci）以兔子繁殖为例子而引入故又称为 “兔子数列”，指的是这样一个数列：1、1、2、3、5、8、13、21、34、…… 在数学上，斐波那契数列以如下被以递推的方法定义：

```bash
F(0)=0，F(1)=1
F(n)=F(n - 1) + F(n - 2)（n ≥ 2，n ∈ N）
```

在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用，为此，美国数学会从 1963 年起出版了以《斐波纳契数列季刊》为名的一份数学杂志用于专门刊载这方面的研究成果

斐波那契数列：1，1，2，3，5，8，13，21，34，55，89...，不难发现一个规律，实际上从第三个数开始，每个数字的值都是前两个数字的和，现在请你设计一个 C 语言程序，可以获取斐波那契数列上任意一位的数字，比如获取第 5 个数，那么就是 5

```c
/**
 * 斐波那契数列
 * @param index index
 * @return  result
 */
int fibonacciSequence(int index){
    int result;
    if(index > 2){
        result = fibonacciSequence(index - 1) + fibonacciSequence(index - 2);
        return result;
    } else{
        result = 1;
        return result;
    }
}

void basic01_demo07() {
    printHeader("basic01_demo07");

    int index;
    printf("Please Input Your index: \n");
    scanf_s("%d", &index);
    printf("index = %d | result = %d ", index, fibonacciSequence(index));

    printFooter("basic01_demo07");
}
```

:::

## 2.4 冒泡排序

- 核心思想

  - 假设数组长度为 N 进行 N -1  轮循环，每轮循环都选出一个最大的数放到后面

  - 每次循环中，从第一个数开始，让其与后面的数两两比较，如果更大，就交换位置，如果更小，就不动

::: warning 嵌套的 for 循环来实现冒泡排序算法:

- 外层循环 for (i = 0; i < n - 1; i++) 控制了排序的轮数 在每一轮中 内层循环会执行比较和交换操作
- 内层循环 for (j = 0; j < n - 1 - i; j++) 用于比较相邻的元素 并根据需要进行交换 由于每一轮都会将当前最大的元素移动到末尾 所以内层循环的终止条件是 n - 1 - i
- 在内层循环中，通过比较 arr[j] 和 arr[j + 1] 的大小来确定它们的顺序 如果 arr[j] 大于 arr[j + 1] 则交换它们的位置 确保较大的元素在后面
- 交换操作使用了一个临时变量 temp 将 arr[j] 的值保存起来 然后将 arr[j + 1] 的值赋给 arr[j] 最后将 temp 的值赋给 arr[j + 1] 完成两个元素的交换这样 每一轮内层循环执行完毕后 当前轮最大的元素就会被放置在正确的位置上
- 内层循环的终止条件 n - 1 - i 是基于以下观察：每一轮冒泡排序都会将当前轮中最大的元素移动到末尾的正确位置上
- 在第一轮比较中 通过内层循环的交换操作，最大的元素会被移动到数组的最后一个位置（即 arr[n-1]）
- 在第二轮比较中 由于最大的元素已经在正确的位置上，内层循环只需要比较和交换剩下的元素 这样最大的元素不会被再次考虑
- 在第三轮比较中 第二大的元素会被移动到倒数第二个位置（即 arr[n-2]）
- 以此类推 每一轮冒泡排序都会将当前轮中最大的元素移动到正确的位置上 因此内层循环的终止条件可以逐渐减少 避免重复比较已经排好序的元素
- 综上所述 内层循环的终止条件 n - 1 - i 是为了优化冒泡排序算法的性能 避免不必要的比较操作 因为在每一轮中，已经有 i 个元素被排好序了

```c
void bubbleSort(int arr[], int n) {
    int i, j;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        printf("the %d result: ", i + 1);
        for (j = 0; j < n; j++) {
            printf("%d ", arr[j]);
        }
        printf("\n");
    }
}

void basic02_demo01() {
    printHeader("basic02_demo01");

    int arr[11] = {3, 5, 7, 2, 9, 0, 6, 7, 1, 8, 4};
    int length = sizeof(arr) / sizeof(arr[0]);
    printf("------------------------------------\nbefore sort: ");
    for (int i = 0; i < length; ++i) {
        printf("%d ", arr[i]);
    }
    printf("\n------------------------------------\n");
    bubbleSort(arr, length);
    printf("------------------------------------\nafter sort: ");
    for (int i = 0; i < length; ++i) {
        printf("%d ", arr[i]);
    }
    printf("\n------------------------------------\n");

    printFooter("basic02_demo01");
}
```

:::

---

::: tip 解释

```bash
给定序列: 3 5 7 2 9 0 6 7 1 8 4
1. 从序列的第一个元素开始 依次比较相邻的两个元素 如果前一个元素大于后一个元素 则交换它们的位置
     - 第 1 轮:   7 > 2 --> 3 5 2 7 9 0 6 7 1 8 4
     -           9 > 0 --> 3 5 2 7 0 9 6 7 1 8 4
     -           9 > 6 --> 3 5 2 7 0 6 9 7 1 8 4
     -           9 > 7 --> 3 5 2 7 0 6 7 9 1 8 4
     -           9 > 1 --> 3 5 2 7 0 6 7 1 9 8 4
     -           9 > 8 --> 3 5 2 7 0 6 7 1 8 9 4
     -           9 > 4 --> 3 5 2 7 0 6 7 1 8 4 9

     第 1 轮排序结束后序列为:  [3 5 2 7 0 6 7 1 8 4 9] 最大的元素 9 已经排在了序列的最后 对除最后一个元素外的剩余元素进行第二轮排序，重复步骤 1
     第 2 轮排序结束后 序列为: [3 2 5 0 6 7 1 7 4 8 9] 最大的元素 8 已经排在了序列的最后
     第 3 轮排序结束后 序列为: [2 3 0 5 6 1 7 4 7 8 9] 最大的元素 7 已经排在了序列的最后
     第 4 轮排序结束后 序列为: [2 0 3 5 1 6 4 7 7 8 9] 最大的元素 7 已经排在了序列的最后
     第 5 轮排序结束后 序列为: [0 2 3 1 5 4 6 7 7 8 9] 最大的元素 6 已经排在了序列的最后
     第 6 轮排序结束后 序列为: [0 2 1 3 4 5 6 7 7 8 9] 最大的元素 5 已经排在了序列的最后
     第 7 轮排序结束后 序列为: [0 1 2 3 4 5 6 7 7 8 9] 最大的元素 4 已经排在了序列的最后
     第 8 轮排序结束后 序列为: [0 1 2 3 4 5 6 7 7 8 9] 最大的元素 3 已经排在了序列的最后
     第 9 轮排序结束后 序列为: [0 1 2 3 4 5 6 7 7 8 9] 最大的元素 2 已经排在了序列的最后
     第 10 轮排序结束后 序列为:[0 1 2 3 4 5 6 7 7 8 9] 最大的元素 1 已经排在了序列的最后
```

:::

## 三、高级部分

## 3.1 指针

::: danger  指针

```c
/**
 * 值传递
 */
void basic03_demo02(int a, int b) {
    int temp = b;
    b = a;
    a = temp;
}

/**
 * 址传递
 */
void basic03_demo03(int *a, int *b) {
    int temp = *b;
    *b = *a;
    *a = temp;
}
```

:::

## 3.2 数组

```c
/**
 ?* 斐波那契数列解法 其二
 ?* 学习了数组，我们来看看如何利用数组来计算斐波那契数列 这里 采用动态规划 的思想
 ?* 动态规划算法通常用于求解具有某种最优性质的问题。在这类问题中，可能会有许多可行解每一个解都对应于一个值
 ?* 我们希望找到具有最优值的解。动态规划算法与分治法类似，其基本思想也是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解。
 * <p>
 ** 我们可以在一开始创建一个数组，然后从最开始的条件不断向后推导，从斐波那契数列的规律我们可以得知：
 ** fib[i] = fib[i - 1] + fib[i - 2]（这里fib代表斐波那契数列）
 ** 得到这样的一个关系（递推方程）就好办了，我们要求解数列第i个位置上的数，只需要知道i - 1和i - 2的值即可，这样，一个大问题，就分成了两个小问题，比如现在我们要求解斐波那契数列的第5个元素：
 ** fib[4] = fib[3] + fib[2]现在我们只需要知道fib[3]和fib[2]即可，那么我们接着来看：
 ** fib[3] = fib[2] + fib[1]以及fib[2] = fib[1] + fib[0]
 ** 由于fib[0]和fib[1]我们已经明确知道是1了，那么现在问题其实已经有结果了，把这些小问题的结果组合起来不就能得到原来大问题的结果了吗？
 * <p>
 !* 现在请你设计一个 C 语言程序 利用 动态规划 的思想解决斐波那契数列问题
 */
void basic02_demo02() {
    printHeader("basic02_demo02");

    printFooter("basic02_demo02");
}
```

>

```c
/**
 ?* 打家劫舍  来源：力扣（LeetCode）No.198 打家劫舍：https://leetcode.cn/problems/house-robber/

 */
void basic02_demo03() {
    printHeader("basic02_demo03");

    printFooter("basic02_demo03");
}
```

## 3.3 字符串

::: danger 字符串的本质

- `char cbq01[] = {'H', 'E', 'L', 'L', 'O',' ', 'C', 'B', 'Q', '\0'}`
- `const char cbq02[] = "HELLO CBQ"`

**cbq01**  中 ` '\0' ` 代表字符串结束标志 | 无论内容是什么，字符串末尾必须添加一个 ` '\0' ` 字符（ASCII 码为 0）表示结束

**双引号囊括的字符串** 实际上就是一个 `const char` 数组类型的值

```c
void basic02_demo04() {
    printHeader("basic02_demo04");

    char cbq01[] = {'H', 'E', 'L', 'L', 'O', ' ', 'C', 'B', 'Q', '\0'};
    const char cbq02[] = "HELLO CBQ";
    printf("cbq01 = %s \n| cbq02 = %s ", cbq01, cbq02);

    printFooter("basic02_demo04");
}

```

:::

## 3.4 回文串的判断

::: warning 回文串的判断

回文串 是一个正读和反读都一样的字符串 请你实现一个 C 语言程序判断用户输入的字符串（仅出现英文字符）是否为 回文串

```c
void basic02_demo05() {
    printHeader("basic02_demo05");

    /**
     !* 从 control 控制台获取一个 str 字符串并取出 \n
     */
    char str[100];
    printf("Please Input str: \n");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = '\0';
    size_t length = strlen(str);
    int i = 0;
    size_t j = length - 1;
    while (i < j) {
        if (str[i] != str[j]) {
            printf("%s is not back str\n", str);
            return;
        }
        i++;
        j--;
    }
    printf("%s is back str\n", str);

    printFooter("basic02_demo05");
}
```

:::

---

::: tip strcspn 函数

 strcspn 是一个 C 语言标准库函数，它的原型如下： `size_t strcspn(const char *str1, const char *str2)`，`strcspn ` 函数用于计算字符串 str1 开头连续不包含字符串 str2 中任何字符的长度具体来说，strcspn 函数会从 str1 的开头开始逐个字符地与 str2 中的字符进行比较 直到遇到 str2 中的任何字符，或者到达 str1 的末尾为止函数返回的是在遇到第一个 str2 中的字符之前 str1 开头连续的字符个数
```c
#include <stdio.h>
#include <string.h>
int main() {
	char str1[] = "Hello, World!";
	char str2[] = " ,!";
	size_t len = strcspn(str1, str2);
	printf("连续不包含 %s 中任何字符的长度为 %zu\n", str2, len);
	return 0;
 }
```

在这个示例中，str1 是一个字符串 "Hello, World!"，str2 是一个包含空格、逗号和感叹号的字符串 `" ,!"` `strcspn(str1, str2) ` 的返回值是 7，表示字符串 str1 开头连续不包含 str2 中任何字符的长度为 7


:::

## 3.5 KMP 字符串匹配算法

```c
void computeLPSArray(const char* pat, size_t M, int* lps) {
    int len = 0;
    lps[0] = 0;
    size_t i = 1;
    while (i < M) {
        if (pat[i] == pat[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}

int KMPSearch(char* pat, char* txt) {
    /**
     !* 使用 size_t 类型来代替 int 以存储字符串的长度是一个合理的修改
     !* 这是因为 strlen 函数返回的是 size_t 类型的值 这是一个无符号整数类型，用于表示大小或长度
     !* 将 size_t 类型的值赋给 int 类型的变量可能会引发类型转换问题 尤其是当字符串长度超过 int 类型可以表示的最大值时
     */
    size_t M = strlen(pat);
    size_t N = strlen(txt);
    int lps[M];
    computeLPSArray(pat, M, lps);
    size_t i = 0;
    int j = 0;
    while (i < N) {
        if (pat[j] == txt[i]) {
            j++;
            i++;
        }
        if (j == M) {
            printf("Found pattern at index %zu \n", i - j);
            return 1; // Pattern found
        } else if (i < N && pat[j] != txt[i]) {
            if (j != 0)
                j = lps[j - 1];
            else
                i = i + 1;
        }
    }
    return 0; // Pattern not found
}
/**
 * 字符串匹配 KMP 算法
 * 现在请你设计一个 C 语言程序 判断第一个字符串中是否包含了第二个字符串
 * eg: str1 = "abcdabbc"
 *     str2 = "cda"
 * 比如上面的例子中 很明显第一个字符串包含了第二个字符串
 */
void basic02_demo06() {
    printHeader("basic02_demo06");

    char txt[] = "abcdabbc";
    char pat[] = "cda";
    if (KMPSearch(pat, txt))
        printf("Pattern found in the string.\n");
    else
        printf("Pattern not found in the string.\n");

    printFooter("basic02_demo06");
}
```

## 3.6 结构体

::: danger 结构体的定义及使用

- 访问结构体元素的两种方式
  - `结构体名.属性`
  - `(*结构体指针名).属性` 等同于 `结构体指针名->属性`

```c
void basic03_demo01() {
    printHeader("basic03_demo01");

    Student cbq = {1, 21, "CaoBaoQi"};
    Student *cbq_p = &cbq;

    printf("show info by struct: {id = %d, age = %d, name = %s}\n", cbq.id, cbq.age, cbq.name);
    printf("show info by struct pointer(Complex) {id = %d, age = %d, name = %s}\n", (*cbq_p).id, (*cbq_p).age,
           (*cbq_p).name);
    /**
     !* (*cbq_p).id 等同于 cbq_p->id
     */
    printf("show info by struct pointer(Simple) {id = %d, age = %d, name = %s}\n", cbq_p->id, cbq_p->age, cbq_p->name);

    printFooter("basic03_demo01");

}
```

:::

---

::: danger 结构体空间大小的计算

- 结构体中的各个数据要求字节对齐，规则如下：
  - 结构体中元素按照定义顺序依次置于内存中，但并不是紧密排列的。从结构体首地址开始依次将元素放入内存时，元素会被放置在其自身对齐大小的整数倍地址上（0默认是所有大小的整数倍）
  - 如果结构体大小不是所有元素中最大对齐大小的整数倍，则结构体对齐到最大元素对齐大小的整数倍，填充空间放置到结构体末尾
  - 基本数据类型的对齐大小为其自身的大小，结构体数据类型的对齐大小为其元素中最大对齐大小元素的对齐大小

```c
 * typedef struct Object {
        char a;
        int b;
        short c;
    }Object;
```

- 其中 char 为 1B int 4B short 2B
- char占据 1 个字节
- int占据 4 个字节 因为前面存了一个 char 按理说应该从第 2 个字节开始存放 但是根据规则一 必须在自己的整数倍位置上存放 2 不是 4 的整数倍位置，这时离 1 最近的下一个整数倍地址就是 4 了，所以前面空 3 个字节的位置出来，然后再放置
- 前面存完 int 之后，就是从 8 开始了 刚好满足 short（2B）的整数倍，但是根据规则二，整个结构体大小必须是最大对齐大小的整数倍（这里最大对齐大小是 int，所以是 4），存完 short 之后，只有 10 个字节，所以屁股后面再补两个空字节，这样就可以了

```bash
| char 1B | 3B | int 4B | short 2B | 2B  |
|1             4        8         10   12|
```

```c
void basic03_demo04() {
    printHeader("basic03_demo04");

    typedef struct Object {
        char a;
        int b;
        short c;
    } Object;
    printf("struct Object size is = %llu", sizeof(Object));

    printFooter("basic03_demo04");
}
```

:::

---

::: danger 结构体数组和指针

- 数组方式访问：`students[i].name`
- 指针方式访问：`student_p->name`

```c
/**
 * 结构体数组和指针
 */
void basic03_demo05() {
    printHeader("basic03_demo05");

    Student students[COUNT] = {{1, 21, "CBQ"},
                               {2, 21, "CBH"},
                               {3, 18, "CB"}};
    printf("Show INFO By array: \n");
    for (int i = 0; i < COUNT; ++i) {
        printf("INFO: name = %s, id = %d, age = %d \n", students[i].name, students[i].id, students[i].age);
    }
    Student *student_p = students;
    printf("Show INFO By pointer: \n");
    for (int i = 0; i < COUNT; ++i) {
        printf("INFO: name = %s, id = %d, age = %d \n", student_p->name, student_p->id, student_p->age);
        student_p++;
    }
    printFooter("basic03_demo05");
}
```

:::

## 3.7 联合体

::: danger 联合体

联合体也可以在内部定义很多种类型的变量，但是它与结构体不同的是，所以的变量共用同一个空间

```c
/**
 * 联合体 联合体的大小至少是其内部最大类型的大小
 */
void basic03_demo06() {
    printHeader("basic03_demo06");

    typedef union Teacher{
        int id;
        char name;
    }Teacher;
    printf("union Teacher size is = %llu\n", sizeof(Teacher));
    printf("=========================\n");
    Teacher teacher;
    teacher.id = 1;
    printf("teacher id = %d \n", teacher.id);
    /**
     !* teacher id = 1
     !* teacher name = 1
     联合体公用一段空间
     */
    printf("teacher name = %d \n", teacher.name);

    printFooter("basic03_demo06");
}
```

:::

## 3.8 枚举

::: danger 枚举的使用

枚举类型一般用于表示一些预设好的整数常量，比如我们风扇有低、中、高三个档位，我们总是希望别人使用我们预设好的这三个档位，而不希望使用其他的档位，因为我们风扇就只设计了这三个档位。

这时我们就可以告诉别人，我们的风扇有哪几个档位，这种情况使用枚举就非常适合。在我们的程序中，只能使用基本数据类型对这三种档位进行区分，这样显然可读性不够，别人怎么知道哪个代表哪个档位呢？而使用枚举就没有这些问题了：

```c
void basic03_demo07(){
    printHeader("basic03_demo07");

    enum status { low = 1, middle = 2, high = 3};
    printf("low: %d\n", low);
    printf("middle: %d\n", middle);
    printf("high: %d\n", high);
    /**
     * low2 由于是第一个，所以还是从 0 开始
     * 不过 middle2 这里已经指定为 6 了 所以紧跟着的 high2 初始值就是 middle2 的值 +1 了
     * 因此 low2 现在是 0 middle就是 6 high2 就是 7 了
     */
    enum status2 {low2, middle2 = 6, high2};
    printf("low2: %d\n", low2);
    printf("middle2: %d\n", middle2);
    printf("high2: %d\n", high2);

    printFooter("basic03_demo07");
}
```

:::

## 3.9 malloc 函数

::: danger malloc 函数的使用

 * **malloc** 用于向系统申请分配指定 **size 个字节** 的内存空间返回类型是 **void * 类型** 如果申请成功返回 **首地址**
 * 如果失败返回 NULL 空地址（比如系统内存不足了就可能会申请失败）
 * 内存资源是很宝贵的（不像硬盘几个 T 随便用 我们的电脑可能 32G 的内存都算高配了）
 * 不能随便浪费 所以 **一般情况下 malloc 和 free 都是一一对应的** 这样才能安全合理地使用内存

```c
void basic03_demo08() {
    printHeader("basic03_demo08");

    int *p = (int *) malloc(sizeof(int));
    *p = 128;
    printf("*p = %d \n", *p);
    free(p);
    p = NULL;

    printFooter("basic03_demo08");
}
```

:::



