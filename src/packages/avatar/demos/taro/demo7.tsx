import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo7 = () => {
  return (
    <Cell className="cell-avatar">
      {harmonyAndRn() ? (
        <Avatar.Group max="3" level="right" maxContent="...">
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
          <Avatar>N</Avatar>
          <Avatar
            color="var(--nutui-color-primary)"
            background={`${harmonyAndRn() ? '#ffd6e1' : 'var(--nutui-brand-2)'}`}
          >
            U
          </Avatar>
          <Avatar>N</Avatar>
        </Avatar.Group>
      ) : (
        <Avatar.Group max="3" level="right" maxContent="...">
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
          <Avatar icon={<User />} />
          <Avatar
            color="var(--nutui-color-primary)"
            background="var(--nutui-brand-2)"
          >
            U
          </Avatar>
          <Avatar icon={<User />} />
        </Avatar.Group>
      )}
    </Cell>
  )
}
export default Demo7
