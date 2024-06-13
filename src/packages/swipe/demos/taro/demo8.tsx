import React, { useRef, useState } from 'react'
import { Swipe, Cell, Button, Dialog } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const refDom = useRef<any>(null)
  const [showDialog, setShowDialog] = useState(false)
  const pRef = useRef('left')
  const beforeClose = (postion: string) => {
    pRef.current = postion
    setShowDialog(true)
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
      <Dialog
        visible={showDialog}
        title="提示"
        onClose={() => {
          refDom.current && refDom.current.close()
          setShowDialog(false)
        }}
      >
        {pRef.current === 'left' ? '确定选择吗？' : '确定删除吗？'}
      </Dialog>
    </>
  )
}
export default Demo8
