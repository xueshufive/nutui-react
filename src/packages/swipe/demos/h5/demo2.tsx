import React from 'react'
import { Swipe, Cell } from '@nutui/nutui-react'
import { Del } from '@nutui/icons-react'

const divNode = (text: string, style: any) => {
  return (
    <div
      style={{
        width: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <Del style={{ marginBottom: '8px' }} />
      <>{text}</>
    </div>
  )
}

const Demo2 = () => {
  return (
    <>
      <Swipe
        style={{ height: '104px' }}
        rightAction={
          <div
            style={{
              height: 'inherit',
              width: '240px',
              display: 'flex',
              fontSize: '12px',
            }}
          >
            <>
              {divNode('设置常买', {
                background: '#F8F8F8',
                color: '#1A1A1A',
              })}
              {divNode('移入收藏', {
                background: '#ffcc00',
                color: '#FFF',
              })}
              {divNode('看相似', {
                background: '#FF860D',
                color: '#FFF',
              })}
              {divNode('删除', {
                background: '#FA2C19',
                color: '#FFF',
              })}
            </>
          </div>
        }
      >
        <Cell title="左滑+Icon" radius={0} />
      </Swipe>
    </>
  )
}
export default Demo2
