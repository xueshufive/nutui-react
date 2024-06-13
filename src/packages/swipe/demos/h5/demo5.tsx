import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button shape="square" type="primary">
            删除
          </Button>
        }
        disabled
      >
        <Cell title="禁用滑动" radius={0} />
      </Swipe>
    </>
  )
}
export default Demo5
