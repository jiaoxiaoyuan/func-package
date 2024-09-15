---
title: 禁止打开控制台
order: 16
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /note
  title: 随记
  order: 4

---

禁止打开控制台
===

 ```js
 //禁止F12键盘事件
    document.addEventListener('keydown', function (event) {
      return 123 != event.keyCode || (event.returnValue = false)
    });
    //禁止右键、选择、复制
    document.addEventListener('contextmenu', function (event) {
      return event.returnValue = false
    })
```



```
    function consoleOpenCallback2 () {
      document.body.innerHTML = '年轻人，不要太好奇';
      window.close();
      window.location = "about:blank";
    }

    setInterval(function () {
      const before = new Date();
      (function () { }).constructor("debugger")();
      // debugger;
      const after = new Date();
      const cost = after.getTime() - before.getTime();
      if (cost > 100) {
        consoleOpenCallback2();
      }
    }, 1000);
```
