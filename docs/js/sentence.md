---
title: 语句
---

## 表达式和语句

::: tip 名词解释

表达式是一组代码的集合，Javascript解释器会将其计算出一个结果

语句是js整句或命令，js语句是以分号结束

:::

::: warning 表达式和语句区别

表达式计算出一个值，但语句用来自行以使某件事发生（做什么事）

:::

## 流程控制语句

### 顺序

流程按照线性顺序执行

### 分支

#### if分支语句

<CodeGroup>

<CodeGroupItem title="单层">

```
if(条件){
	满足条件执行的代码
}
```

</CodeGroupItem>

<CodeGroupItem title="双层">

```
if(条件){
	满足条件要执行的代码
}
else {
	不满足条件执行的代码
}
```

</CodeGroupItem>

</CodeGroup>

#### 三元运算符

```
条件?满足条件执行的代码:不满足条件执行的代码
```

#### switch语句

```
switch(条件){
	case 值1:
		代码1
		break
	case 值2
		代码2
		break
	case 值3
		代码3
		break
	default
		代码n
		break        
}
```

### 循环

::: danger 终止条件

循环一定要有终止条件，否则会死循环

:::

#### while

```
while(循环条件){
	要重复执行的代码(循环体)
}
```

#### for

```
for(声明记录循环次数的变量;循环条件；变化值){
	循环体
}
```

#### 循环结束

continue: 结束本次循环，继续下次循环

break:跳出循环

