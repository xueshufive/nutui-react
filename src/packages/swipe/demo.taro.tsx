import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'
import Demo9 from './demos/taro/demo9'

const SwipeDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础用法',
      title2: '禁用滑动',
      title3: '事件监听',
      title4: '非同步控制',
      title5: '自定义內容',
      title6: '通过实例方法控制',
      title7: '点击关闭',
      title8: '阻止父元素滚动',
      title9: '卡片场景',
    },
    'en-US': {
      title1: 'Basic usage',
      title2: 'Disable sliding',
      title3: 'Event monitoring',
      title4: 'Asynchronous control',
      title5: 'Custom content',
      title6: 'Control via instance method',
      title7: 'Click to close',
      title8: 'Prevent parent scrolling',
      title9: 'Card mode',
    },
  })

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.title1}</h2>
        <Demo1 />
        <h2>{translated.title9}</h2>
        <Demo2 />
        <h2>{translated.title8}</h2>
        <Demo3 />
        <h2>{translated.title6}</h2>
        <Demo4 />
        <h2>{translated.title7}</h2>
        <Demo5 />
        <h2>{translated.title2}</h2>
        <Demo6 />
        <h2>{translated.title3}</h2>
        <Demo7 />
        <h2>{translated.title4}</h2>
        <Demo8 />
        <h2>{translated.title5}</h2>
        <Demo9 />
      </div>
    </>
  )
}

export default SwipeDemo
