---
title: 数据类型
---
## 数据类型分类
### 基本数据类型

#### number <Badge text="数字型" type="tip" />
::: tip 介绍
Javascript是弱数据类型，赋值后才能判断
:::

- 整数
- 小数
- 负数

#### string <Badge text="字符串型" type="tip" />
##### 字符串含义

字符串使用英文状态下的`"` `"`或`'` `'`
单引号和双引号可以相互嵌套，但注意不能自己嵌套自己

##### 字符串拼接
```javascript
document.write('忍者'+'神龟')

let comic = '火影忍者'
let author = '岸本齐史'
document.write(comic + author)
```
##### 模板字符串
```js
let comic = '火影忍者'
let author = '岸本齐史'

document.write(${comic}的作者是${author})
```

#### Boolean <Badge text="布尔型" type="warning" />
```js
let isDarkMode = true;
```

#### undefined <Badge text="未定义型" type="danger" />
只声明变量，未赋值
#### null <Badge text="空" type="warning" />
声明并赋值，但为空

### 引用数据类型

#### object <Badge text="对象" type="tip" />

#### function <Badge text="函数" type="danger" />

#### array <Badge text="数组" color="warning" />

## 检测数据类型
```js
let num = 12;
console.log(typeof num);
```

## 数据类型转换
### 隐式转换
```js
let num = 12;
console.log(typeof num + 12);  //输出number12
```
`+`两边只要有一个字符串，都会把另外一个转成字符串
除了`+`以外的算术运算符，比如`-` `*` `/`等都会把数据转成数字类型

### 显式转换
<CodeGroup>
<CodeGroupItem title="数字型">

```js
console.log(Number('10'))

//保留整数
console.log(parseInt('12.88'))

// 保留小数
console.log(parseFloat('12.88'))
```
</CodeGroupItem>

<CodeGroupItem title="字符型">

```js:no-line-numbers
console.log(String(10))
```

</CodeGroupItem>
</CodeGroup>