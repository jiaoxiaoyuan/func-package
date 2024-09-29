---
title: 提供者
order: 4
nav:
  title: 服务端
  path: /Back-end
  order: 8
group:
  path: /nestjs
  title: Nest
  order: 1
---

## Providers

Providers 是 `Nest` 的一个基本概念。许多基本的 `Nest` 类可能被视为 provider - `service`,`repository`, `factory`, `helper` 等等。 他们都可以通过 `constructor` **注入**依赖关系。 这意味着对象可以彼此创建各种关系，并且“连接”对象实例的功能在很大程度上可以委托给 `Nest`运行时系统。 Provider 只是一个用 `@Injectable()` 装饰器注释的类。

![提供者 - 图1](./assets/e195ec74edc7ecfc7225f704484669ff.png)

在前面的章节中，我们已经创建了一个简单的控制器 `CatsController` 。控制器应处理 `HTTP` 请求并将更复杂的任务委托给 **providers**。`Providers` 是纯粹的 `JavaScript` 类，在其类声明之前带有 `@Injectable()`装饰器。

> 由于 `Nest` 可以以更多的面向对象方式设计和组织依赖性，因此我们强烈建议遵循 [SOLID](https://en.wikipedia.org/wiki/SOLID) 原则。



## 服务

让我们从创建一个简单的 `CatsService` 开始。该服务将负责数据存储和检索，其由 `CatsController` 使用，因此把它定义为 `provider`，是一个很好的选择。因此，我们用 `@Injectable()` 来装饰这个类 。

> cats.service.ts

```js
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  create(cat: Cat) {
    this.cats.push(cat);
  }
  findAll(): Cat[] {
    return this.cats;
  }
}
```

> 要使用 `CLI` 创建服务类，只需执行 `$ nest g service cats` 命令。

我们的 `CatsService` 是具有一个属性和两个方法的基本类。唯一的新特点是它使用 `@Injectable()` 装饰器。该 `@Injectable()` 附加有元数据，因此 `Nest` 知道这个类是一个 `Nest` provider。需要注意的是，上面有一个 `Cat` 接口。看起来像这样：

> interfaces/cat.interface.ts

```js
export interface Cat {
  name: string;
  age: number;
  breed: string;
}
```

现在我们有一个服务类来检索 `cat` ，让我们在 `CatsController` 里使用它 ：

> cats.controller.ts

```js
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

`CatsService` 是通过类构造函数注入的。注意这里使用了私有的只读语法。这意味着我们已经在同一位置创建并初始化了 `catsService` 成员。

## 依赖注入

Nest 是建立在强大的设计模式, 通常称为依赖注入。我们建议在官方的 [Angular文档](https://angular.cn/guide/dependency-injection)中阅读有关此概念的精彩文章。

在 `Nest` 中，借助 **TypeScript** 功能，管理依赖项非常容易，因为它们仅按类型进行解析。在下面的示例中，`Nest` 将 `catsService` 通过创建并返回一个实例来解析 `CatsService`（或者，在单例的正常情况下，如果现有实例已在其他地方请求，则返回现有实例）。解析此依赖关系并将其传递给控制器的构造函数（或分配给指定的属性）：

```ts
 constructor(private readonly catsService: CatsService) {}
```
