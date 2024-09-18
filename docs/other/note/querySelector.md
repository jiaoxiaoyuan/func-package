---
title: 粘贴图片到指定区域
order: 17
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /note
  title: 随记
  order: 4
---

粘贴图片到指定区域
===

```js
        // 监听paste事件
        const el = document.querySelector('body');
        document.addEventListener('paste', function (e) {
            const dataTransferItemList = e.clipboardData.items;
            // 过滤非图片类型
            const items = [].slice.call(dataTransferItemList).filter(function (item) {
                return item.type.indexOf('image') !== -1;
            });
            if (items.length === 0) {
                return;
            }
            const dataTransferItem = items[0];
            const blob = dataTransferItem.getAsFile();
            // 获取base64
            const fileReader = new FileReader();
            fileReader.addEventListener('load', function (e) {
                console.log(e);
                let base64 = e.target.result;
                let img = document.createElement('img');
                img.src = event.target.result;
                el.appendChild(img)
            });
            fileReader.readAsDataURL(blob);
            // 如果觉得base64太长，也可以生成本地临时链接
            let url = URL.createObjectURL(blob);
            // 上传图片至后台
            // upload(blob);
        });
```
