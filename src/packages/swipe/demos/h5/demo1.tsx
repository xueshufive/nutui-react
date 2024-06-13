import React from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button type="primary" shape="square">
            删除
          </Button>
        }
        onTouchStart={(event) => console.log('touch start', event)}
        onTouchMove={(event) => console.log('touch Move', event)}
        onTouchEnd={(event) => console.log('touch End', event)}
      >
        <Cell title="左滑" radius={0} />
      </Swipe>
    </>
  )
}
export default Demo1
