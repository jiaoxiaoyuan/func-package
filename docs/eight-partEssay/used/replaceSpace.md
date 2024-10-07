---
title: 替换空格
order: 2
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

替换空格
===

>请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

```javascript
function replaceSpace(str)
{
    var str = str.split('');
    for(var i = 0;i<str.length;i++){
        if(str[i]===' '){
            str[i]='%20'
        }
    }
    str = str.join('')
    return str;
}
module.exports = {
    replaceSpace : replaceSpace
};
```

