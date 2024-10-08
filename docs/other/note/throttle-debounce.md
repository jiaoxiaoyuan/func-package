---
title: 事件的节流(throttle) 和 防抖(debounce)
order: 15
nav:
  title: 文档
  path: /other
  order: 100
group:
  path: /note
  title: 随记
  order: 4

---

事件的节流(throttle) 和 防抖(debounce)
===

## 生词 (New Words)
- **`parameter [pə'ræmɪtə]` --n. 参数**
- **`throttle ['θrɒt(ə)l]` --n.节流(阀); 喉咙; 风门.**
- **`debounce [di'bauns]` --n.防抖**
- **`delay [dɪ'leɪ]/[dɪ'le]` --n.延迟; 拖延; 耽误; 延期.**
  **--vt.使...延迟, 使...耽误. --vi.拖延, 耽误.**
    + Ignorance delays(vt) progress. 无知使进步延迟.
    + The airplane was delayed(vt) for two hours by the accident.
      飞机被那意外事件耽误了两个小时.
    + He delayed(vt) his departure till [until] the next day.
      他延至翌日才出发.
    + Write the letter now! Don't delay(vi). 现在就写那封信, 别耽误了.
    + The train arrived after a delay(n) of two hours.
      那班火车延迟两个小时到达[误点两小时].


## 内容(Content)

### 1. 事件的节流(throttle)和防抖(debounce) 
- 我们知道在浏览器中滚动(scroll)事件时一个很容易被反复触发的事件; 其实不止 scroll
  事件, resize 事件, 鼠标事件(e.g.: mousemove, mouseover 等), 键盘事件(keyup,
  keydown 等) 都存在被频繁触发的风险.

  频繁触发回调导致的大量计算会引发页面的抖动甚至卡顿. 为了规避这种情况,
  我们需要一些手段来控制事件被触发的频率. 就是在这样的背景下,
  throttle（事件节流）和 debounce（事件防抖）出现了. 
### 1.1 "节流" 与 "防抖" 的本质
- 这两个东西都是以**闭包**的形式存在的.
  
  它们通过对事件所对应的回调函数进行包裹, 以自由变量的形式缓存时间信息, 最后用 
  `setTimeout` 来控制事件的触发频率.

### 1.2 节流 (throttle): 第一个人说了算
- throttle 的中心思想是: 在某段时间, 不管你触发了多少次回调, 我都只认第一次,
  并在固定的计时结束时给与响应.

  先给大家讲个小故事: 现在有一个旅客刚下了飞机, 需要用车,
  于是打电话叫了该机场唯一的一辆机场大巴来接. 司机开到机场, 心想来都来了,
  多接几个人一起走吧, 这样这趟才跑得值 -- 等个十分钟看看. 于是司机一边打开了计时器,
  一边招呼后面的客人陆陆续续上车. 在这十分钟内, 后面下飞机的乘客都只能乘这一辆大巴,
  十分钟过去后, 不管后面还有多少没挤上车的乘客, 这班车都必须发走. 

  在这个故事里, "司机" 就是我们的节流阀, 他控制发车的时机; "乘客"
  就是因为我们频繁操作事件而不断涌入的回调任务, 它需要接受 "司机" 的安排;
  而 "计时器", 就是我们上文提到的以自由变量形式存在的时间信息, 它是 "司机"
  决定发车的依据; 最后 "发车" 这个动作, 就对应到回调函数的执行. 

  总结下来, 所谓的 "节流", 是通过在一段时间内**无视后来产生的回调请求**来实现的.
  只要一位客人叫了车, 司机就会为他开启计时器, 一定的时间内,
  后面需要乘车的客人都得排队上这一辆车, 谁也无法叫到更多的车. 

  对应到实际的交互上是一样一样的: 每当用户触发了一次 scroll 事件,
  我们就为这个触发操作开启计时器. 一段时间内, 后续所有的 scroll 事件都会被当作
  "一辆车的乘客" -- 它们无法触发新的 scroll 回调. 直到 "一段时间" 到了,
  第一次触发的 scroll 事件对应的回调才会执行, 而 "一段时间内" 触发的后续的
  scroll 回调都会被节流阀无视掉. 

  理解了大致的思路, 我们现在一起实现一个 throttle: 
  ```js
    // - fn 为我们需要包装的回调函数, interval 间隔时间
    function throttle(fn, interval) {
        // - last 为上一次触发回调的时间
        let last = 0;

        // - 将 throttle 处理结果当做函数返回
        return function() {
            let context = this;     // - 保留调用函数的 this 上下文
            let args = arguments;   // - 保留调用函数传入的参数
            let now = new Date();   // - 记录本次触发回调的时间

            // - 判断上次触发的时间和本次触发的时间差是否小于回调时间
            // - 如果当前触发的时间 - 上次触发的时间已经大于了设置的回调时间,
            //   则执行回调.
            if (now - last > interval) {
                last = now; // - 把当前的调用时间赋值给上次触发调用的时间.
                fn.apply(context, args);
            }
        }
    }

    // - 用 throttle 来包装 scroll 的回调
    const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000);

    document.addEventListener('scroll', better_scroll);
  ```

### 1.3 防抖 (debounce): 最后一个人说了算
- 防抖的中心思想在于: 我会等你到底. 在某段时间内, 不管你触发了多少次回调,
  我都只认最后一次. 
  
  继续讲司机开车的故事. 这次的司机比较有耐心. 第一个乘客上车后,
  司机开始计时(比如说十分钟). 十分钟之内, 如果又上来了一个乘客, 司机会把计时器清零,
  重新开始等另一个十分钟(延迟了等待). 直到有这么一位乘客, 从他上车开始,
  后续十分钟都没有新乘客上车, 司机会认为确实没有人需要搭这趟车了, 才会把车开走. 

  我们对比 throttle 来理解 debounce: 在throttle的逻辑里, “第一个人说了算”,
  它只为第一个乘客计时, 时间到了就执行回调. 而 debounce 认为, “最后一个人说了算”,
  debounce 会为每一个新乘客设定新的定时器. 

  我们基于上面的理解, 来写一下 debounce 实现:
  ```js
    // - fn 为我们需要包装的回调函数, delay 间隔时间
    function debounce(fn, delay) {
        let timeoutId = null;   // - 超时调用 ID
        // - 将 debounce 处理结果当做函数返回
        return function() {
            let context = this;
            let args = arguments;

            // - 每次事件被触发时, 都去清楚之前的旧定时器
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // - 设立新定时器
            timer = setTimeout(function() {
                fn.apply(context, args);
            }, delay)
        }
    }

    // - 用 debounce 来包装 scroll 的回调
    const better_scroll = debounce(() => console.log('触发了滚动事件'), 1000);
    document.addEventListener('scroll', better_scroll);
  ```

### 1.4 用 Throttle 来优化 Debounce
- debounce 的问题在于它 "太有耐心了". 试想, 如果用户的操作十分频繁——他每次都不等
  debounce 设置的 delay 时间结束就进行下一次操作, 于是每次 debounce
  都为该用户重新生成定时器, 回调函数被延迟了不计其数次.
  频繁的延迟会导致用户迟迟得不到响应, 用户同样会产生 "这个页面卡死了" 的感觉. 

  为了避免弄巧成拙, 我们需要借力 throttle 的思想, 打造一个 "有底线" 的
  debounce -- 等你可以, 但我有我的原则: delay 时间内, 我可以为你重新生成定时器;
  但只要 delay 的时间到了, 我必须要给用户一个响应. 这个 throttle 与 debounce
  的 "合体" 思路, 已经被很多库应用到了它们的加强版 throttle 函数的实现中:
  ```js
    // - fn 为我们需要包装的回调函数, delay 间隔时间
    function throttle(fn, delay) {
        let last = 0, timeoutId = null;
        return function() {
            let context = this;
            let args = arguments;
            let now = new Date();   // - 记录本次触发回调的时间

            // - 本次触发回调的时间 - 上次回调时间 < 间隔时间
            if (now - last < delay) {
                // - 则清除上次的超时调用, 把本次的的触发重新设置为一个新的超时调用
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    last = now;
                    fn.apply(context, args);
                }, delay);
            } else {
                // - 本次触发回调的时间 - 上次回调时间 > 大于了间隔时间,
                //   那就不等了, 无论如何要返回给用户一次响应.
                last = now;
                fn.apply(context, args);
            }
        }
    }

    // - 用新的 throttle 包装 scroll 的回调
    const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000);

    document.addEventListener('scroll', better_scroll);
  ```
