---
title: 把字符串转换成整数
order: 48
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

把字符串转换成整数
===

```js
function StrToInt(str)
{
    // write code here
    if(!str) {return 0;}
    let arr = str.split('');
    let count = 0;
    let flag = 0
    arr.forEach(item=>{
        if(item=='-'||item=='+'){
           count++;
        }
        if(item>'9'||item<'0') {
        	// console.log(item)
         //    return 0
            if(item!='+'&&item!='-')
            {flag++}
        }
    })
    if(flag>0) return 0
    if(count>1) {return 0;}
    if(arr[0]=='+') {
        if(!arr[1]) return 0
        arr.shift()
    	return arr.join('')
    }
    if(arr[0]=='-') {
         if(!arr[1]) return 0
        let sum = 0
        for(let i = 1;i<arr.length;i++){
            sum+=arr[i]
        }
        if(sum==0){
               arr.shift() 
        }

    return arr.join('');
    }
    return arr.join('');
}
```

