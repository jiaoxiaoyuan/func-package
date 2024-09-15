---
title: 截图不完整问题
order: 20
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /note
  title: 随记
  order: 4
---

截图不完整问题
===

```js

import html2canvas from "html2canvas";

           let num = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

            var device = navigator.userAgent;
            var isAndroid = device.indexOf('Android') > -1 || device.indexOf('Adr') > -1; //android终端
            var isiOS = !!device.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isiOS) {
                num = num +50;
            } else if(isAndroid) {
                num = num -300;
                
            } else {
            }
       
            this.$nextTick(() => {
                     let ref = this.$refs.faultTree; // 截图区域
                      const targetDom = document.querySelector("#imageToFile")
                     html2canvas(targetDom, {
                        width: window.screen.availWidth,
                        height: window.screen.availHeight -100,
                        windowWidth: document.body.scrollWidth,
                        windowHeight: document.body.scrollHeight - 500,
                        x:0,
                        y:num,
                           useCORS: true
                    }).then(canvas => {
                        let dataURL = canvas.toDataURL("image/png");
                                //获取海报地址
                        this.dataURL = dataURL
                            // // 打开保存海报的子组件的
                        this.$refs.savePic.openShow()
                    });
            }, 200);
```

截图工具，我们会用到，但会发现一些异步数据图片啥的我么拿不到，截取不完整。




加上这个属性就可以啦
useCORS: true
