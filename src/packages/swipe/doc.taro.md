# Swipe组件

## 介绍

常用于单元格左右滑删除等手势操作

## 安装

```tsx
import { Swipe } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 卡片场景

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 阻止父元素滚动

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 通过实例方法控制

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 点击关闭

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 禁用滑动

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 事件监听

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 异步控制

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 自定义内容

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

## Swipe

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，可以在事件参数中获取到 | `number` \| `string` | `-` |
| leftAction | 左侧滑动区域的内容 | `ReactNode` | `-` |
| rightAction | 右侧滑动区域的内容 | `ReactNode` | `-` |
| beforeClose | 关闭前的回调函数，返回滑动区域所在方向 `position` | `(position: 'left \| 'right') => void` | `-` |
| disabled | 是否禁用滑动 | `boolean` | `false` |
| onOpen | 打开单元格侧边栏 | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onClose | 收起单元格侧边栏 | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onActionClick | 点击左侧或者右侧时触发 | `(event: MouseEvent<HTMLDivElement>, position: 'left' \|'right') => void` | `-` |
| onTouchStart | 开始触碰时触发 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |
| onTouchMove | 滑动时触发 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |
| onTouchEnd | 结束触碰时触发 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |

### Ref

| 属性 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 打开单元格侧边栏，`side`参数默认为`right` | `(side?: 'left' \| 'right') => void` |
| close | 收起单元格侧边栏 | `() => void` |
