# Swipe組件

## 介紹

常用於單元格左右滑刪除等手勢操作

## 安裝

```tsx
import { Swipe } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 卡片場景

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 通過實例方法控製

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 點擊關閉

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 禁用滑動

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 事件監聽

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 異步控製

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 自定義內容

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Swipe

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 標識符，可以在事件參數中獲取到 | `number` \| `string` | `-` |
| leftAction | 左側滑動區域的內容 | `ReactNode` | `-` |
| rightAction | 右側滑動區域的內容 | `ReactNode` | `-` |
| beforeClose | 關閉前的回調函數，返回滑動區域所在方向 `position` | `(position: 'left \| 'right') => void` | `-` |
| disabled | 是否禁用滑動 | `boolean` | `false` |
| onOpen | 打開單元格側邊欄 | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onClose | 收起單元格側邊欄 | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-` |
| onActionClick | 點擊左側或者右側時觸發 | `(event: MouseEvent<HTMLDivElement>, position: 'left' \| 'right') => void` | `-` |
| onTouchStart | 開始觸碰時觸發 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |
| onTouchMove | 滑動時觸發 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |
| onTouchEnd | 結束觸碰時觸發 | `(event: TouchEvent<HTMLDivElement>) => void` | `-` |

### Ref

| 屬性 | 說明 | 回調參數 |
| --- | --- | --- |
| open | 打開單元格側邊欄，`side`參數默認為`right` | `(side?: 'left' \| 'right') => void` |
| close | 收起單元格側邊欄 | `() => void` |
