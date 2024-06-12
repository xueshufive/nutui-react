import React from 'react'
import { Button, Cell, Swipe } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const App = () => {
  return (
    <>
      <Swipe
        rightAction={
          <Button
            type="primary"
            shape="square"
            style={{ alignSelf: 'stretch', height: pxTransform(46) }}
          >
            删除
          </Button>
        }
      >
        <Cell
          title="左滑删除"
          radius={0}
          style={{
            margin: 0,
            alignSelf: 'stretch',
            boxShadow: '0px 0px 0px 0px rgb(237, 238, 241)',
          }}
        />
      </Swipe>
    </>
  )
}
export default App
