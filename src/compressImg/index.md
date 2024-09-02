---
title: compressImg - 自定义压缩图片函数
nav:
  title: 函数库
  path: /lib
group:
  path: /imageTool
  title: 图片处理函数
  order: 8
---

## compressImg

Demo:

```tsx | pure
import { compressImg } from 'func-package';

// 压缩图片
const newImg = compressImg(img, 'image/png', 500, 300, 0.8).then((blob) =>
  console.log(blob),
);
```
