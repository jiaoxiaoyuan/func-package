---
title:   arkTs：网络请求封装和使用
order: 18
nav:
  title: 鸿蒙
  path: /HarmonyOS
  order: 9
group:
  path: /ArkTS
  title: 基础
  order: 1
---
### 1. module.json5文件配置网络请求

```ts
{
  "module": {
    "requestPermissions": [
      {
        "name": "ohos.permission.INTERNET"
      }
    ]
  }
}
```

### 2. 在pages同级创建一个文件夹，起名为api

### 3. api文件夹下创建index.ts文件，文件内容：

```ts
import http from '@ohos.net.http';

// 接口参数格式校验
interface ReqObj {
  url: string
  params?: object | string | number
}

export default async function getHttpData(reqObj:ReqObj): Promise<any>{
  let dataList: any = []

  let httpRequest = http.createHttp();
  let response = httpRequest.request(
    "填写HTTP请求的URL地址", 
    {
        // 接口请求method
        method: http.RequestMethod.POST,
        // 接口请求头
        header: {
            'Content-Type': 'application/json'
        },
        //使用POST请求时此字段用于传递内容
        extraData: {
            data: ''
        },
        // 可选，指定返回数据的类型
        expectDataType: http.HttpDataType.STRING,
    }
  );
  await response.then((data) => {
    const code = data.responseCode
    if (code == 200) {
      const response = data.result + "";
      const res = JSON.parse(response).data
      dataList = res
    }else if (code === 401){
      // 登录状态失效
    }
  }).catch((err) => {
    console.info('error:' + JSON.stringify(err));
  })
  return dataList;
}
```

### 4. 调用接口：

```ts
// 引入定义的接口
import getHttpData from '../api/index'

@Entry
@Component
struct Index {
  async aboutToAppear() {
    const list = await getHttpData('接口参数')
    console.log(list)
  }

  build() {
    Column() {
      
    }
  }
}
```
