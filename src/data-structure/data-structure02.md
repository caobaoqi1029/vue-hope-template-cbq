---
title: 线性结构
icon: /svgs/note.svg
order: 2
category:
  - 数据结构
  - MD
---
> **程序 = 数据结构 + 算法**

![image-20240110140636421](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110140636421.png)

## 一、什么是数据结构与算法

回顾我们之前的 C 语言程序设计阶段，我们已经接触过基本数据类型，并且能够使用结构体对数据进行组织，我们可以很轻松地使用一个结构体来存放一个学生的完整数据，在数据结构学习阶段，我们还会进一步地研究。

## 1.1 数据结构

> **数据结构 (Data Structure)** 是带有结构特性的数据元素的集合，它研究的是数据的 **逻辑结构** 和 **物理结构**以及它们之间的 **相互关系**。

比如现在我们需要保存 100 个学生的数据，那么你首先想到的肯定是使用数组吧！没错，没有什么比数组更适合存放这 100 个学生的数据了，但是如果我们现在有了新的需求呢？我们不仅仅是存放这些数据，我们还希望能够将这些数据按顺序存放，支持在某个位置插入一条数据、删除一条数据、修改一条数据等，这时候，数组就显得有些乏力了。

![image-20240110143831863](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110143831863.png)

我们需要一种更好的数据表示和组织方式，才能做到类似于增删改查这样的操作，而完成这些操作所用到的方法，我们称其为 **算法**

## 1.2 算法

比如现在我们希望你求出 1-100 所有数字的和，请通过程序来实现：

```c
int main() {
    int sum = 0;
    for (int i = 1; i <= 100; ++i) sum += i;
    printf("1 - 100 `s sum = %d \n", sum);
}
```

我们很容易就能编写出这样的程序，实际上只需要一个 for 循环就能搞定了，而这就是我们设计的算法。在之前的 C 语言程序设计阶段，我们其实已经学习了许多算法，包括排序算法、动态规划等。当然，解决问题的算法并不是只有一种，实际上我们上面的方式并不是最优的算法，如果想要求得某一段整数的和，其实使用 **高斯求和公式** 能够瞬间得到结果：

高斯求和公式是一个用来快速计算连续整数之和的公式，经常用于数学和相关领域。用 LaTeX 表示高斯求和公式可以写作：

![image-20240110143713716](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110143713716.png)

所以，我们完全没必要循环那么多次进行累加计算，而是直接使用数学公式：

```c
int main() {
    printf("1 - 100 `s sum = %d \n", (1 + 100) * 100 / 2);
}
```

可见，不同的算法，执行的效率也是有很大差别的，这里我们就要提到算法的复杂度了。

::: danger 算法的复杂度

衡量一个算法的复杂程度需要用到以下两个指标：

- 时间复杂度 `T(n)`：算法程序在执行时消耗的时间长度，一般与输入数据的规模 n 有关。
- 空间复杂度 `S(n)`：算法程序在执行时占用的存储单元长度，同样与数据的输入规模 n 有关，大部分情况下，我们都是采取空间换时间的算法。

比如我们上面的两种算法，第一种需要执行 n 次循环，每轮循环进行一次累加操作，而第二种只需要进行一次计算即可。实际中我们计算时间复杂度时，其实并不一定要计算精确的执行次数，而只需要大概执行次数，那么这里我们使用 `O` 渐进表示法。

:::

---

::: tip O 渐进表示法

- **大O符号（Big O notation）**：是用于描述函数渐进行为的数学符号。

而这里的循环次数，实际上就是我们需要知道的大致执行次数，所以第一种算法的时间复杂度为：`O(n)`，其中 n 就是项数，因为它需要执行 n 次计算才能得到最后的结果。而第二种算法的时间复杂度为：`O(1)`，因为它只需要执行一次计算（更准确的说它的执行次数是一个常数，跟项数 n 毫无关系），显然，当 n 变得非常大时，第二种方法的计算速度远超第一种。

再比如我们之前使用的冒泡排序算法，需要进行两轮循环，而循环的次数在经过优化之后为 `(n - 1)(n - 1)/2`，得到的结果中包含了一个 `n` 的平方，此时这种算法的时间复杂度就来到 `O(n^2)` 了。

在不同的空间复杂度下，可能 n 小的时候还没什么感觉，但是当 n 变得非常大时，差距就不是一点半点了，我们来看看常用函数的增长曲线：

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110135800720.png" alt="image-20240110135800720" style="zoom:67%;" />

:::

所以我们在设计算法的时候，一定要考虑到时间和空间复杂度的问题，这里列出常用函数的增长表：

|     函数      |    类型    |                             解释                             |
| :-----------: | :--------: | :----------------------------------------------------------: |
|     O(1)      |   常数阶   |   如果算法能够优化到这个程度，那么基本上算是最快的算法了。   |
|  O(log2*n*)   |   对数阶   | 仅次于常数阶的速度，我们后面会介绍的二分搜索算法，就能够到达这个级别。 |
|    O(*n*)     |   线性阶   | 我们后面介绍的线性表插入、删除数据，包括动态规划类算法能够达到线性阶。 |
| O(*n*log2*n*) | 线性对数阶 |          相当于在对数阶算法外层套了一层线性阶循环。          |
|    O(*n*2)    |   平方阶   | 我们前面学习的冒泡排序，需要进行两重循环，实际上就是平方阶。 |
|    O(*n*3)    |   立方阶   |         从立方阶开始，时间复杂度就开始变得有点大了。         |
|    O(2*n*)    |   指数阶   | 我们前面介绍的斐波那契数列递归算法，就是一个指数阶的算法，因为它包含大量的重复计算。 |
|    O(*n*!)    |    阶乘    | 这个增长速度比指数阶还恐怖，但是一般很少有算法能达到这个等级。 |

我们在编写算法时，一定要注意算法的时间复杂度，当时间复杂度太大时，可能计算机就很难在短时间内计算出结果了。

## 1.3 二分搜索算法

现在有一个从小到大排序的数组，给你一个目标值 `target`，现在请你找到这个值在数组中的对应下标，如果没有，请返回 `-1`：

```c
int search(int* nums, int numsSize, int target){
    //请实现查找算法
}

int main() {
    int arr[] = {1, 3, 4, 6, 7,8, 10, 11, 13, 15}, target = 3;
    printf("%d", search(arr, 10, target));
}
```

此时，最简单的方法就是将数组中的元素一个一个进行遍历，总有一个是，如果遍历完后一个都没有，那么就结束：

```c
int search(int* nums, int numsSize, int target){
    for (int i = 0; i < len; ++i) {
        if(nums[i] == target) return i;   //循环 n 次，直到找到为止
    }
    return -1;
}
```

虽然这样的算法简单粗暴，但是并不是最好的，我们需要遍历 n 次才能得到结果，时间复杂度为 O(*n*)，我们可以尝试将其优化到更低的时间复杂度。这里我们利用它有序的特性，实际上当我们查找到大于目标 `target` 的数时，就没必要继续寻找了：

```c
int search(int* nums, int numsSize, int target){
    for (int i = 0; i < len; ++i) {
        if(nums[i] == target) return i;
        if(nums[i] > target) break;
    }
    return -1;
}
```

这样循环进行的次数也许就会减小了，但是如果我们要寻找的目标 `target` 刚好是最后几个元素呢？这时时间复杂度又来到到了 O(*n*)，那么有没有更好的办法呢？我们依然可以继续利用数组有序的特性，既然是有序的，那么我们不妨随机在数组中找一个数，如果这个数大于目标，那么就不再考虑右边的部分，如果小于目标，那么就考虑左边的部分，然后继续在另一部分中再次随机找一个数，这样每次都能将范围缩小，直到找到为止（其思想就比较类似于 **牛顿迭代法**，再次强调数学的重要性）

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110140009307.png" alt="image-20240110140009307" style="zoom:67%;" />

而二分思想就是将一个有序数组不断进行平分，直到找到为止，这样我们每次寻找的范围会不断除以 2，所以查找的时间复杂度就降到了O(log2*n*)，相比一个一个比较，效率就高了不少：

![image-20240110140030927](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110140030927.png)

好了，那么现在我们就可以利用这种思想，编写出二分搜索算法了，因为每一轮都在进行同样的搜索操作，只是范围不一样，所以这里直接采用递归分治算法：

```c
int binarySearch(int * nums, int target, int left, int right){  //left 代表左边界，right 代表右边界
    if(left > right) return -1;   //如果左边大于右边，那么肯定就找完了，所以直接返回
    int mid = (left + right) / 2;   //这里计算出中间位置
    if(nums[mid] == target) return mid;   //直接比较，如果相等就返回下标
    if(nums[mid] > target)    //这里就是大于或小于的情况了，这里 mid+1 和 mid-1 很多人不理解，实际上就是在下一次寻找中不算上当前的 mid，因为这里已经比较过了，所以说左边就 -1，右边就 +1
        return binarySearch(nums, target, left, mid - 1);   //如果大于，那么说明肯定不在右边，直接去左边找
    else
        return binarySearch(nums, target, mid + 1, right);  //如果小于，那么说明肯定不在左边，直接去右边找
}

int search(int* nums, int numsSize, int target){
    return binarySearch(nums, target, 0, numsSize - 1);
}
```

当然也可以使用 `while` 循环来实现二分搜索，如果需要验证自己的代码是否有问题 [可以直接在力扣上提交代码](https://leetcode.cn/problems/binary-search/)

## 二、线性表

还记得我们开篇提了一个问题吗？

> 我们还希望能够将这些数据按顺序存放，支持在某个位置插入一条数据、删除一条数据、修改一条数据等，这时候，数组就显得有些乏力了。

数组无法做到这么高级的功能，那么我们就需要定义一种更加高级的数据结构来做到，我们可以使用线性表（Linear List）

> 线性表是由同一类型的数据元素构成的有序序列的线性结构。线性表中元素的个数就是线性表的长度，表的起始位置称为表头，表的结束位置称为表尾，当一个线性表中没有元素时，称为空表。

::: tip 线性表一般需要包含以下功能：

- **初始化线性表** 将一个线性表进行初始化，得到一个全新的线性表。
- **获取指定位置上的元素** 直接获取线性表指定位置 `i` 上的元素。
- **获取元素的位置** 获取某个元素在线性表上的位置 `i`。
- **插入元素** 在指定位置 `i `上插入一个元素。
- **删除元素** 删除指定位置 `i` 上的一个元素。
- **获取长度**返回线性表的长度。

:::

也就是说，现在我们需要设计的是一种功能完善的表结构，它不像是数组那么低级，而是真正意义上的表：

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110145110810.png" alt="image-20240110145110810" style="zoom:67%;" />

简单来说它就是列表，比如我们的菜单，我们在点菜时就需要往菜单列表中添加菜品或是删除菜品，这时列表就很有用了，因为数组长度固定、操作简单，而我们添加菜品、删除菜品这些操作又要求长度动态变化、操作多样。

::: danger 实现线性表结构

实现线性表的结构一般有两种

- 顺序存储实现
- 链式存储实现

:::

## 2.1 顺序表

前面我们说到，既然数组无法实现这样的高级表结构，那么我就基于数组，对其进行强化，也就是说，我们存放数据还是使用数组，但是我们可以为其编写一些额外的操作来强化为线性表，像这样底层依然采用顺序存储实现的线性表，我们称为顺序表。

![image-20240110145130045](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110145130045.png)

这里我们可以先定义一个新的结构体类型，将一些需要用到的数据保存在一起，这里我们以`int`类型的线性表为例：

```c
typedef int E;  //这里我们的元素类型就用 int 为例吧，先起个别名

struct List {
    E array[10];   //实现顺序表的底层数组
    int capacity;   //表示底层数组的容量
};
```

为了一会使用方便，我们可以给其起一个别名：

```c
typedef struct List * ArrayList; //因为是数组实现，所以就叫 ArrayList，这里直接将 List 的指针起别名
```

然后我们就可以开始编写第一个初始化操作了：

```c
void initList(ArrayList list){
    list->capacity = 10;   //直接将数组的容量设定为 10 即可
}
```

但是我们发现一个问题，这样的话我们的顺序表长度不就是固定为 10 的了吗？而前面我们线性表要求的是长度是动态增长的，那么这个时候怎么办呢？我们可以直接使用一个指针来指向底层数组的内存区域，当装不下的时候，我们可以创建一个新的更大的内存空间来存放数据，这样就可以实现扩容了，所以我们来修改一下：

```c
struct List {
    E * array;   //指向顺序表的底层数组
    int capacity;   //数组的容量
};
```

接着我们修改一下初始化函数：

```c
void initList(ArrayList list){  //这里就默认所有的顺序表初始大小都为10吧，随意
    list->array = malloc(sizeof(E) * 10);   //使用malloc函数申请10个int大小的内存空间，作为底层数组使用
    list->capacity = 10;    //容量同样设定为10
}
```

但是还没完，因为我们的表里面，默认情况下是没有任何元素的，我们还需要一个变量来表示当前表中的元素数量：

```c
struct List {
    E * array;   //指向顺序表的底层数组
    int capacity;   //数组的容量
    int size;   //表中的元素数量
};

typedef struct List * ArrayList;

void initList(ArrayList list){  //这里就默认所有的顺序表初始大小都为10吧，随意
    list->array = malloc(sizeof(int) * 10);   //使用malloc函数申请10个int大小的内存空间，作为底层数组使用
    list->capacity = 10;    //容量同样设定为10
    list->size = 0;   //元素数量默认为0
}
```

还有一种情况我们需要考虑，也就是说如果申请内存空间失败，那么需要返回一个结果告诉调用者：

```c
_Bool initList(ArrayList list){
    list->array = malloc(sizeof(int) * 10);
    if(list->array == NULL) return 0;  //需要判断如果申请的结果为NULL的话表示内存空间申请失败
    list->capacity = 10;
    list->size = 0;
    return 1;   //正常情况下返回true也就是1
}
```

这样，一个比较简单的顺序表就定义好，我们可以通过`initList`函数对其进行初始化：

```c
int main() {
    struct List list;   //创建新的结构体变量
    if(initList(&list)){   //对其进行初始化，如果失败就直接结束
      	...
    } else{
        printf("顺序表初始化失败，无法启动程序！");
    }
}
```

接着我们来编写一下插入和删除操作，对新手来说也是比较难以理解的操作：

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20240110145205617.png" alt="image-20240110145205617" style="zoom:67%;" />

我们先设计好对应的函数：

```c
void insertList(ArrayList list, E element, int index){
    	//list就是待操作的表，element就是需要插入的元素，index就是插入的位置（注意顺序表的index是按位序计算的，从1开始，一般都是第index个元素）
}
```

我们按照上面的思路来编写一下代码：

```c
void insertList(ArrayList list, E element, int index){
    for (int i = list->size; i > index - 1; i--)  //先使用for循环将待插入位置后续的元素全部丢到后一位
        list->array[i] = list->array[i - 1];
    list->array[index - 1] = element;    //挪完之后，位置就腾出来了，直接设定即可
    list->size++;   //别忘了插入之后相当于多了一个元素，记得size + 1
}
```

现在我们可以来测试一下了：

```c
void printList(ArrayList list){   //编写一个函数用于打印表当前的数据
    for (int i = 0; i < list->size; ++i)   //表里面每个元素都拿出来打印一次
        printf("%d ", list->array[i]);
    printf("\n");
}
int main() {
    struct List list;
    if(initList(&list)){
        insertList(&list, 666, 1);  //每次插入操作后都打印一下表，看看当前的情况 
        printList(&list);
        insertList(&list, 777, 1);
        printList(&list);
        insertList(&list, 888, 2);
        printList(&list);
    } else{
        printf("顺序表初始化失败，无法启动程序！");
    }
}
```

虽然这样看起来没什么问题了，但是如果我们在非法的位置插入元素会出现问题：

```c
insertList(&list, 666, -1);   //第一个位置就是0，怎么可能插入到-1这个位置呢，这样肯定是不正确的，所以我们需要进行判断
printList(&list);
```

我们需要检查一下插入的位置是否合法：

![image-20220723153933279](https://image.itbaima.cn/markdown/2022/07/23/H67F1crBhqQiXxg.png)



转换成位序，也就是[1, size + 1]这个闭区间，所以我们在一开始的时候进行判断：

```c
_Bool insertList(ArrayList list, E element, int index){
    if(index < 1 || index > list->size + 1) return 0;   //如果在非法位置插入，返回0表示插入操作执行失败
    for (int i = list->size; i > index - 1; i--)
        list->array[i] = list->array[i - 1];
    list->array[index - 1] = element;
    list->size++;
    return 1;   //正常情况返回1
}
```

我们可以再来测试一下：

```c
if(insertList(&list, 666, -1)){
    printList(&list);
} else{
    printf("插入失败！");
}
```

![image-20220723154249242](https://image.itbaima.cn/markdown/2022/07/23/7Q4IxSd2RDKmzBZ.png)



不过我们还是没有考虑到一个情况，那么就是如果我们的表已经装满了，也就是说size已经达到申请的内存空间最大的大小了，那么此时我们就需要考虑进行扩容了，否则就没办法插入新的元素了：

```c
_Bool insertList(ArrayList list, E element, int index){
    if(index < 1 || index > list->size + 1) return 0;
    if(list->size == list->capacity) {   //如果size已经到达最大的容量了，肯定是插不进了，那么此时就需要扩容了
        int newCapacity = list->capacity + (list->capacity >> 1);   //我们先计算一下新的容量大小，这里我取1.5倍原长度，当然你们也可以想扩多少扩多少
        E * newArray = realloc(list->array, sizeof(E) * newCapacity);  //这里我们使用新的函数realloc重新申请更大的内存空间
        if(newArray == NULL) return 0;   //如果申请失败，那么就确实没办法插入了，只能返回0表示插入失败了
        list->array = newArray;
        list->capacity = newCapacity;
    }
    for (int i = list->size; i > index - 1; i--)
        list->array[i] = list->array[i - 1];
    list->array[index - 1] = element;
    list->size++;
    return 1;
}
```

> realloc函数可以做到控制动态内存开辟的大小，重新申请的内存空间大小就是我们指定的新的大小，并且原有的数据也会放到新申请的空间中，所以非常方便。当然如果因为内存不足之类的原因导致内存空间申请失败，那么会返回NULL，所以别忘了进行判断。

这样，我们的插入操作就编写完善了，我们可以来测试一下：

```c
int main() {
    struct List list;
    if(initList(&list)){
        for (int i = 0; i < 30; ++i)
            insertList(&list, i, i);
        printList(&list);
    } else{
        printf("顺序表初始化失败，无法启动程序！");
    }
}
```

成功得到结果：

![image-20220723160222988](https://image.itbaima.cn/markdown/2022/07/23/IqvG1xsUQOo5KwC.png)



这样，我们就完成了顺序表的插入操作，接着我们来编写一下删除操作，其实删除操作也比较类似，也需要对元素进行批量移动，但是我们不需要考虑扩容问题，我们先设计好函数：

```c
void deleteList(ArrayList list, int index){
    	//list就是待操作的表，index是要删除的元素位序
}
```

按照我们上面插入的思路，我们反过来想一想然后实现删除呢？首先是删除的范围：

![image-20220723160901921](https://image.itbaima.cn/markdown/2022/07/23/uHBjUfKpd9ygScW.png)



换算成位序就是[1, size]这个闭区间内容，所以我们先来限定一下合法范围：

```c
_Bool deleteList(ArrayList list, int index){
    if(index < 1 || index > list->size) return 0;

    return 1;  //正常情况返回1
}
```

接着就是删除元素之后，我们还需要做什么呢？我们应该将删除的这个元素后面的全部元素前移一位：

![image-20220723161412178](https://image.itbaima.cn/markdown/2022/07/23/dgGCcL7q9Pf41tF.png)



我们按照这个思路，来编写一下删除操作：

```c
_Bool deleteList(ArrayList list, int index){
    if(index < 1 || index > list->size) return 0;
    for (int i = index - 1; i < list->size - 1; ++i)
        list->array[i] = list->array[i + 1];   //实际上只需要依次把后面的元素覆盖到前一个即可
    list->size--;   //最后别忘了size - 1
    return 1;
}
```

删除相比插入要简单一些，我们来测试一下吧：

```c
for (int i = 0; i < 10; ++i)  //先插10个
    insertList(&list, i, i);
deleteList(&list, 5);   //这里删除5号元素
printList(&list);
```

成功得到结果：

![image-20220723161835205](https://image.itbaima.cn/markdown/2022/07/23/q2UrtVlh1RJWKQd.png)



OK，那么插入和删除操作我们就成功完成了，还有一些比较简单的功能，我们这里也来依次实现一下，首先是获取长度：

```c
int sizeList(ArrayList list){
    return list->size;   //直接返回size就完事
}
```

接着是按位置获取元素和查找指定元素的位置：

```c
E * getList(ArrayList list, int index){
    if(index < 1 || index > list->size) return NULL;   //如果超出范围就返回NULL
    return &list->array[index - 1];
}
int findList(ArrayList list, E element){
    for (int i = 0; i < list->size; ++i) {   //一直遍历，如果找到那就返回位序
        if(list->array[i] == element) return i + 1;
    }
    return -1;  //如果遍历完了都没找到，那么就返回-1
}
```

这样，我们的线性表就实现完成了，完整代码如下：

```c
#include <stdio.h>
#include <stdlib.h>

typedef int E;

struct List {
    E * array;
    int capacity;
    int size;
};

typedef struct List * ArrayList;

_Bool initList(ArrayList list){
    list->array = malloc(sizeof(E) * 10);
    if(list->array == NULL) return 0;
    list->capacity = 10;
    list->size = 0;
    return 1;
}

_Bool insertList(ArrayList list, E element, int index){
    if(index < 1 || index > list->size + 1) return 0;

    if(list->size == list->capacity) {
        int newCapacity = list->capacity + (list->capacity >> 1);
        E * newArray = realloc(list->array, newCapacity * sizeof(E));
        if(newArray == NULL) return 0;
        list->array = newArray;
        list->capacity = newCapacity;
    }

    for (int i = list->size; i > index - 1; --i)
        list->array[i] = list->array[i - 1];
    list->array[index - 1] = element;
    list->size++;
    return 1;
}

_Bool deleteList(ArrayList list, int index){
    if(index < 1 || index > list->size) return 0;
    for (int i = index - 1; i < list->size - 1; ++i)
        list->array[i] = list->array[i + 1];
    list->size--;
    return 1;
}

int sizeList(ArrayList list){
    return list->size;
}

E * getList(ArrayList list, int index){
    if(index < 1 || index > list->size) return NULL;
    return &list->array[index - 1];
}

int findList(ArrayList list, E element){
    for (int i = 0; i < list->size; ++i) {
        if(list->array[i] == element) return i + 1;
    }
    return -1;
}
```

**问题：**请问顺序实现的线性表，插入、删除、获取元素操作的时间复杂度为？

- **插入：**因为要将后续所有元素都向后移动，所以平均时间复杂度为�(�)*O*(*n*)
- **删除：**同上，因为要将所有元素向前移动，所以平均时间复杂度为�(�)*O*(*n*)
- **获取元素：**因为可以利用数组特性直接通过下标访问到对应元素，所以时间复杂度为�(1)*O*(1)

## 三、特殊线性表



## 四、算法 Demo

