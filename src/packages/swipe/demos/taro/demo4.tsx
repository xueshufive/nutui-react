import React, { useRef } from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const openRef = useRef<any>(null)
  return (
    <>
      <Swipe
        ref={openRef}
        rightAction={
          <Button shape="square" type="primary">
            删除
          </Button>
        }
        style={{ marginBottom: '10px' }}
      >
        <Cell title="点击下方按钮打开或关闭" radius={0} />
      </Swipe>
      <div style={{ display: 'flex' }}>
        <Button
          style={{ marginInlineEnd: '10px' }}
          type="primary"
          size="small"
          onClick={() => (openRef.current as any)?.open()}
        >
          打开
        </Button>
        <Button size="small" onClick={() => (openRef.current as any)?.close()}>
          关闭
        </Button>
      </div>
    </>
  )
}
export default Demo4
