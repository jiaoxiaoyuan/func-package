---
title: 获取当前时间取整到整分的毫秒数
order: 18
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /note
  title: 随记
  order: 4
---


获取当前时间取整到整分的毫秒数
===

# 获取当前时间取整到整分的毫秒数
```js
getCurrent() {
	let now = new Date();
	let year = now.getFullYear();      //年
	let m = now.getMonth() + 1;     //月
	let d = now.getDate();          //日
	let h = now.getHours();         //时
	let i = now.getMinutes();       //分
	let nowD = `${year}/${m}/${d} ${h}:${i}`;

	let nowDS = new Date(nowD).getTime();
	return nowDS
},

```



获取当天时间的0点
获取当天时间的59分59秒

```js
  // 获取当前日期和时间
  const currentDate = new Date()

  // 创建一个新的日期对象，以避免修改原始对象
  const endDate = new Date(currentDate)
  const startDate = new Date(currentDate)

  startDate.setHours(0, 0, 0, 0)
  endDate.setHours(23, 59, 59, 999)
  console.log(startDate,endDate)
```
