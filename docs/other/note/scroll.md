---
title: 滚动到顶部
order: 19
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /note
  title: 随记
  order: 4
---

滚动到顶部
===

```js
    
    backToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },

    scroll() {
      if (timer) {
          return
        }
      timer = setTimeout(() => {
        let winHeight = document.documentElement.clientHeight;
        // 获取页面向上滚动距离，chrome浏览器识别document.body.scrollTop，而火狐识别document.documentElement.scrollTop，这里做了兼容处理
        let toTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 如果滚动超过一屏，返回顶部按钮出现，反之隐藏
        if(toTop>=winHeight){
            this.showTopBtn = true;
        }else {
          this.showTopBtn = false;
        }
        timer = null;
        clearTimeout(timer)
      },100)
    },


      window.addEventListener("scroll", this.scroll)


```
