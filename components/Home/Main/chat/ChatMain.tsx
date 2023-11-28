'use client'
import { FloatButton } from 'antd'
import MessageInput from './MessageInput'
import { useAppContext } from '@/components/AppContext'
import { ActionType } from '@/reducer/AppReducer'
import { CiLogin } from 'react-icons/ci'
import MessageList from './MessageList'

const ChatMain = () => {
  const {
    state: { navHidden },
    dispatch,
  } = useAppContext()
  return (
    <div className="flex flex-1 relative dark:bg-slate-700">
      <MessageList />
      <MessageInput />
      {navHidden && (
        <FloatButton
          icon={<CiLogin />}
          onClick={() => {
            dispatch({
              type: ActionType.UPDATE,
              field: 'navHidden',
              value: false,
            })
          }}
          style={{ left: 20, bottom: 55 }}
        />
      )}
    </div>
  )
}

export default ChatMain
