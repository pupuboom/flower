import { Input } from 'antd'
import { useRef, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { FiZap } from 'react-icons/fi'
import TextareaAutoSize from 'react-textarea-autosize'
import { useAppContext } from '@/components/AppContext'
import { ActionType } from '@/reducer/AppReducer'
import { Message } from '@/type/chat'
import { Controller } from 'react-hook-form'

const MessageInput = () => {
  const chatIdRef = useRef('')
  const {
    state: { messageList },
    dispatch,
  } = useAppContext()
  const [messageContent, setMessageContent] = useState('')
  const createOrUpdateMessage = async (message: Message) => {
    const response = await fetch('/api/message/update', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(message),
    })
    if (!response.ok) {
      return
    }
    const { data } = await response.json()
    if (!chatIdRef.current) {
      chatIdRef.current = data.message.chatId
    }
    return data.message
  }
  const send = async () => {
    const message = await createOrUpdateMessage({
      id: '',
      role: 'user',
      content: messageContent,
      chatId: chatIdRef.current,
    })
    if (!message) {
      return
    }
    dispatch({ type: ActionType.ADD_MESSAGE, message })
    setMessageContent('')
    const controller = new AbortController()
    const response = await fetch('/api/chat', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      signal: controller.signal,
      body: JSON.stringify({ message }),
    })
    if (response.ok && response.body) {
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let done = false
      let content = ''
      const responseMessage: Message = await createOrUpdateMessage({
        id: '',
        role: 'assistant',
        content: '',
        chatId: chatIdRef.current,
      })
      if (!responseMessage) {
        controller.abort()
        return
      }
      dispatch({ type: ActionType.ADD_MESSAGE, message: responseMessage })

      while (!done) {
        const result = await reader.read()
        done = result.done
        const chunk = decoder.decode(result.value)
        console.log('chunk', chunk)
        content += chunk
        dispatch({
          type: ActionType.UPDATE_MESSAGE,
          message: { ...responseMessage, content },
        })
      }
      createOrUpdateMessage({ ...responseMessage, content })
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
          value={messageContent}
          maxLength={8000}
          onChange={(e) => {
            setMessageContent(e.target.value)
          }}
        />
        {messageContent.length > 0 ? (
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
