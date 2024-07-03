---
title: 数组
---
::: tip 介绍
数组(Array)是一种可以按照顺序保存多个数据
:::

## 声明语法
```javascript
//声明并初始化数组
let names = ['黄忠、赵云、关羽、张飞、马超']
```

## 专业术语

| 术语 | 解释                                       |
| ---- | ------------------------------------------ |
| 元素 | 数组中保存的每个数据                       |
| 下标 | 数组中数组的编号                           |
| 长度 | 数组中数据的个数，通过数组的length属性获得 |

```javascript
let names = ['黄忠、赵云、关羽、张飞、马超']

console.log(names[0])
console.log(names[1])
console.log(nameslength)
```

## 数组操作



## 案例

### 求数组所有元素的和以及平均值

```javascript
let arr = [2,1,35,43]
let sum = 0
let average  = 0
for (let i = 0 ;i <arr.length;i++){
    //i输出的是数组下标
    //arr[i]是数组元素
    sum += arr[i]
}
average = sum / arr.length
document.write(`总分：${sum},平均分${average}`)
```

### 求数组最大值

```javascript
let arr = prompt('')
let max = arr[0]

for(let i = 1;i<arr.length;i++){
	if(max < arr[i]){
		max  = arr[i]
	}
}

console.log(max)
```

