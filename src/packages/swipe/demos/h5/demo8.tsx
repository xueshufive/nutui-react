import React from 'react'
import { Swipe, Cell, Button, InputNumber } from '@nutui/nutui-react'

const Demo8 = () => {
  return (
    <>
      <Swipe
        rightAction={
          <>
            <Button shape="square" type="primary">
              加入购物车
            </Button>
          </>
        }
      >
        <Cell>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <span>商品</span>
            <InputNumber style={{ float: 'right' }} />
          </div>
        </Cell>
      </Swipe>
    </>
  )
}
export default Demo8
