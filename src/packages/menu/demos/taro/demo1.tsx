import React, { useState } from 'react'
import { Menu } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const [options1] = useState([
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ])
  return (
    <Menu
      onClose={(i: number) => console.log('onClose', i)}
      onOpen={(i: number) => console.log('onOpen', i)}
    >
      <Menu.Item
        options={options}
        defaultValue={0}
        onChange={(val) => {
          console.log(val)
        }}
      />
      <Menu.Item options={options1} defaultValue="a" />
    </Menu>
  )
}
export default Demo1