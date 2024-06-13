import React, { useRef } from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const closeRef = useRef<any>(null)
  return (
    <>
      <Swipe
        ref={closeRef}
        rightAction={
          <Button shape="square" type="primary">
            删除
          </Button>
        }
        onActionClick={() => {
          ;(closeRef.current as any)?.close()
        }}
      >
        <Cell title="点击右侧按钮关闭" radius={0} />
      </Swipe>
    </>
  )
}
export default Demo5
