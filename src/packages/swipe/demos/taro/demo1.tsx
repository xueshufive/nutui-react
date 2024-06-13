import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button type="primary" shape="square">
            删除
          </Button>
        }
      >
        <Cell title="左滑" radius={0} />
      </Swipe>
    </>
  )
}
export default Demo1
