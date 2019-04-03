## 介绍

[小程序开发之影分身术](https://juejin.im/post/5c788d28e51d4560a82be8d2)

本仓库提供的是一套代码生成多个小程序的一种解决方案。

有时候，我们可能会遇到如下场景：需要开发多个小程序，而这些小程序的功能大致相同，部分功能存在差异化，界面样式也存在差异化。出现这种情况最常见的场景一般是，提供给多个客户主要功能相同的、但是有小程度的定制化的多个小程序。

这种情况下如果分别维护多套小程序代码，是一件很头疼的事。

该仓库所提供的解决方案，就是尽量在该场景下，只维护一套核心代码，生成多套小程序。

该项目基于 [Taro](https://taro.aotu.io/) 框架进行开发。感谢[凹凸实验室](https://aotu.io)的开源精神。

## 环境

开发环境的搭建请参考：
[Taro 安装及使用](https://nervjs.github.io/taro/docs/GETTING-STARTED.html)

## 使用方式

修改config/channel.js内的channel字段，该项目可用"channel1"、"channel2"、"channel3"。

Clone代码到本地后，根据Taro官方文档执行编译。或运行package.json中的 
```
"dev:weapp": "npm run build:weapp -- --watch"
```

使用小程序开发工具打开生成的dist_channel1目录（如果channel.js内配置的是channel2，则为dist_channel2目录）

具体使用请参考文章：[小程序开发之影分身术](https://juejin.im/post/5c788d28e51d4560a82be8d2)

## *License*

WeAppBunXin is released under the Apache 2.0 license.

```
Copyright 2019 BakerJ.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at following link.

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```


