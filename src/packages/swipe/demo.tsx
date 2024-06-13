import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'

const SwipeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
      title2: '禁用滑动',
      title3: '事件监听',
      title4: '非同步控制',
      title5: '自定义內容',
      title6: '通过实例方法控制',
      title8: '卡片场景',
      title7: '点击关闭',
    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '禁用滑動',
      title3: '事件監聽',
      title4: '非同步控制',
      title5: '自定義內容',
      title6: '通過實例方法控制',
      title8: '卡片場景',
      title7: '点击关闭',
    },
    'en-US': {
      title1: 'Basic usage',
      title2: 'Disable sliding',
      title3: 'Event monitoring',
      title4: 'Asynchronous control',
      title5: 'Custom content',
      title6: 'Control via instance method',
      title8: 'Card mode',
      title7: 'Click to close',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <Demo1 />
        <h2>{translated.title8}</h2>
        <Demo2 />
        <h2>{translated.title6}</h2>
        <Demo3 />
        <h2>{translated.title7}</h2>
        <Demo4 />
        <h2>{translated.title2}</h2>
        <Demo5 />
        <h2>{translated.title3}</h2>
        <Demo6 />
        <h2>{translated.title4}</h2>
        <Demo7 />
        <h2>{translated.title5}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default SwipeDemo
