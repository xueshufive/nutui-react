import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [shouldCatchMove, setShouldCatchMove] = useState(false)

  return (
    <>
      <View catchMove={shouldCatchMove}>
        <Swipe
          rightAction={
            <Button type="primary" shape="square">
              左滑
            </Button>
          }
          onTouchEnd={(e) => {
            setShouldCatchMove(false)
          }}
          onTouchMove={(e) => {
            setShouldCatchMove(true)
          }}
        >
          <Cell title="左滑" radius={0} />
        </Swipe>
      </View>
    </>
  )
}
export default Demo3
