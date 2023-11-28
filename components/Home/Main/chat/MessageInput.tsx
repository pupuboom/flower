import { Input } from 'antd'
import { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { FiZap } from 'react-icons/fi'
import TextareaAutoSize from 'react-textarea-autosize'
import { useAppContext } from '@/components/AppContext'
import { ActionType } from '@/reducer/AppReducer'
import { Message } from '@/type/chat'

const MessageInput = () => {
  const {
    state: { messageList },
    dispatch,
  } = useAppContext()
  const [message, setMessage] = useState('')
  const send = async () => {
    const messageInput: Message = {
      chatId: '',
      role: 'user',
      content: message,
    }
    dispatch({ type: ActionType.ADD_MESSAGE, messageInput })
    setMessage('')
    const response = await fetch('/api/chat', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ message }),
    })
    if (response.ok) {
      const { resp } = await response.json()
      const resp_content = resp['kwargs']['content']
      const messageInput: Message = {
        chatId: '',
        role: 'assistant',
        content: resp_content,
      }
      dispatch({ type: ActionType.ADD_MESSAGE, messageInput })
    }
  }
  return (
    <div className="absolute inset-x-0 bottom-[40px] ">
      <div className="flex items-end w-4/5 mx-auto pt-6 pb-5 border-1 space-x-2 px-2 border-black/10 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <div className="text-green-500 text-xl flex">
          <FiZap />
        </div>
        <TextareaAutoSize
          className="outline-none flex-1 max-h-64  bg-transparent text-black resize-none border-0"
          placeholder={'请在此输入问题或“/”选择案例'}
          rows={1}
          autoFocus
          value={message}
          maxLength={8000}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        {message.length > 0 ? (
          <div
            className="text-xl text-green-500"
            onClick={() => {
              send()
            }}>
            <IoSend />
          </div>
        ) : (
          <div className="text-xl text-gray-400">
            <IoSend />
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageInput
