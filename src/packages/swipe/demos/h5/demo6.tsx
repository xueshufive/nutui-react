import React from 'react'
import { Swipe, Cell, Button, Toast } from '@nutui/nutui-react'

const Demo6 = () => {
  const handleChange = () => {
    Toast.show('点击')
  }
  return (
    <>
      <Swipe
        leftAction={
          <Button shape="square" type="primary">
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
        onOpen={() => Toast.show('打开')}
        onClose={() => Toast.show('关闭')}
      >
        <Cell title="事件" />
      </Swipe>
    </>
  )
}
export default Demo6
