# Swipe

## Intro

It is often used for gesture operations such as sliding left and right to delete cells

## Install

```tsx
import { Swipe } from '@nutui/nutui-react';
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Card Mode

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Control via instance method

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Click to close

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Disable sliding

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Event monitoring

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Asynchronous control

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Custom content

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Swipe

### Props

| Props | Description | Type | Default |
| --- | --- | --- | --- |
| name | identifier, which can be obtained in the event parameters | `number` \| `string` | `-`|
| leftAction | contents of the left sliding area | `ReactNode` | `-`|
| rightAction | content of right sliding area | `ReactNode` | `-`|
| beforeClose | the callback function before closing returns `position` which is the direction of the sliding area | `(position: 'left \|'right') => void` | `-`|
| disabled | disable sliding | `boolean` | `false` |
| onOpen | open the cell sidebar | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-`|
| onClose | collapse the cell sidebar | `(name, position): { name: string \| number, position: 'left' \| 'right' } => void` | `-`|
| onActionClick | triggered when clicking on the left or right | `(event: MouseEvent<HTMLDivElement>, position: 'left' \|'right') => void` | `-`|
| onTouchStart | triggered when starting to touch | `(event: TouchEvent<HTMLDivElement>) => void` | `-`|
| onTouchMove | triggered when starting to move | `(event: TouchEvent<HTMLDivElement>) => void` | `-`|
| onTouchEnd | triggered when finishing to touch | `(event: TouchEvent<HTMLDivElement>) => void` | `-`|

### Ref

| 属性 | 说明 | 回调参数 |
| --- | --- | --- |
| open | open the cell sidebar, the default value of `side` is `right` | `(side?: 'left' \| 'right') => void` |
| close | collapse the cell sidebar | `() => void` |
