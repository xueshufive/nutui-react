import React, { useRef } from 'react'
import { Swipe, Cell, Button, Dialog } from '@nutui/nutui-react'

const Demo7 = () => {
  const refDom = useRef<any>(null)
  const beforeClose = (position: string) => {
    Dialog.alert({
      title: '提示',
      content: position === 'left' ? '确定选择吗？' : '确定删除吗？',
      onConfirm: () => {
        refDom.current && refDom.current.close()
      },
    })
  }
  return (
    <>
      <Swipe
        ref={refDom}
        beforeClose={beforeClose}
        leftAction={
          <Button shape="square" type="success">
            选择
          </Button>
        }
        rightAction={
          <>
            <Button shape="square" type="danger">
              删除
            </Button>
          </>
        }
      >
        <Cell title="事件" />
      </Swipe>
    </>
  )
}
export default Demo7
