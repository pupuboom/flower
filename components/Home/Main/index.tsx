'use client'
import { Message } from '@/type/chat'
import { Card, CardBody, Input } from '@nextui-org/react'
import { useState } from 'react'
import { AiOutlineSound } from 'react-icons/ai'
import { MdKeyboardVoice } from 'react-icons/md'
import { ImSun } from 'react-icons/im'
import { GiEvilMoon } from 'react-icons/gi'

const Main = () => {
  const [content, setContent] = useState('')
  const [answer, setAnswer] = useState('')
  const [question, setQuestion] = useState('')
  const send = async () => {
    setQuestion(content)
    setContent('')
    if (content.length > 0) {
      const message: Message = { role: 'user', content: content }
      console.log(message)
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      const { res } = await response.json()
      setAnswer(res)
    }
  }
  return (
    <div className="flex flex-col  justify-center items-center flex-1 space-y-3">
      <Card className="absolute top-1/4">
        <CardBody className="flex flex-row space-x-3 ">
          <div className="text-4xl flex items-center text-sky-400">
            <AiOutlineSound />
          </div>
          <div className="flex items-center text-xl">
            欢迎来到微调！这是一个以大语言模型为基础构建的应用网站。我可以进行对话理解，传统的自然语言处理等任务，我有什么可以帮助您的吗~~~
          </div>
        </CardBody>
      </Card>

      {question && (
        <Card className=" w-[1000px] mt-3">
          <CardBody className="flex flex-row space-x-3 ">
            <div className="text-4xl flex items-center">
              <ImSun />
            </div>
            <div className="flex items-center text-xl w-full">{question}</div>
          </CardBody>
        </Card>
      )}
      {answer && (
        <Card className="w-[1000px]">
          <CardBody className="flex flex-row space-x-3 ">
            <div className="text-4xl flex items-center">
              <GiEvilMoon />
            </div>
            <div className="flex items-center text-xl w-full">{answer}</div>
          </CardBody>
        </Card>
      )}
      <Card className="absolute bottom-16">
        <CardBody className="flex flex-row space-x-3 w-[1000px]">
          <div className="text-4xl flex items-center text-sky-400">
            <MdKeyboardVoice />
          </div>
          <div className="flex-1 items-end text-xl">
            <Input
              type="email"
              color="success"
              size="lg"
              placeholder=""
              className=""
              value={content}
              onChange={(e) => {
                setContent(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  send()
                }
              }}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Main
