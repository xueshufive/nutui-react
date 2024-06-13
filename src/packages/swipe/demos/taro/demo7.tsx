import React, { useState } from 'react'
import { Swipe, Cell, Button, Toast } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }

  const handleChange = () => {
    toastShow('点击')
  }
  return (
    <>
      <Swipe
        leftAction={
          <Button shape="square" type="success">
            选择
          </Button>
        }
        rightAction={
          <>
            <Button shape="square" type="primary">
              删除
            </Button>
            <Button shape="square" type="primary">
              移入收藏
            </Button>
          </>
        }
        onActionClick={handleChange}
        onOpen={({ name, position }) => {
          toastShow('打开')
        }}
        onClose={() => toastShow('关闭')}
      >
        <Cell title="事件" />
      </Swipe>
      <Toast
        type="text"
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}
export default Demo7
