---
title: Js介绍
---

::: danger 注意区分

Javascript和Java没有一点关系

:::

## Javascript是什么

Javascript是一门运行在客户端的编程语言

### Javascript作用

1. 网页特效
2. 表单验证
3. 数据交互

### Javascript的组成

ECMAScript，规定了js基础语法核心知识

Web APIs，包括DOM和BOM

## Javascript书写位置
<CodeGroup>

<CodeGroupItem title="内部">

::: tip 书写位置

内部Javascript，写在`</body>`前面

:::

::: warning 原因

DOM从上往下执行，写在后面能方便网页css，html加载完成，防止Js代码中途出现错误，

:::

</CodeGroupItem>

<CodeGroupItem title="外部">

::: tip 书写位置
外部Javascript，使用`script`引入

:::

::: warning 不要画蛇添足

外部Javascript引入时，不要在里面添加Js代码，因为浏览器不会执行

:::
</CodeGroupItem>

<CodeGroupItem title="内联">

::: tip 书写位置

内联，不推荐使用，vue里会使用

:::

</CodeGroupItem>
</CodeGroup>

## Javascript注释

### 单行注释

符号：`//`

快捷键 ：<kbd>Ctrl + /</kbd>

### 块注释

符号：/* */

快捷键 ：<kbd>Shift + Alt + A</kbd>

## Javascript结束符

英文分号代表语句结束

换行符回车会被识别为结束符，所以结束符可写可不写

## 输入和输出语法

### 输出语法

```javascript
document.write('输出内容');
alert('警告内容');
console.log('控制台输出内容')
```

### 输入语法

```javascript
prompt('请输入你的姓名：')
```