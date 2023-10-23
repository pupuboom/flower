import { Card, CardBody, Input } from '@nextui-org/react'
import { AiOutlineSound } from 'react-icons/ai'
import { PiFlowerTulipLight } from 'react-icons/pi'

const Main = () => {
  return (
    <div className="flex flex-col  justify-center items-center flex-1 space-y-3">
      <Card className="absolute top-1/4">
        <CardBody className="flex flex-row space-x-3 ">
          <div className="text-4xl flex items-center">
            <AiOutlineSound />
          </div>
          <div className="flex items-center text-xl">
            欢迎来到微调。这是一个以大语言模型为基础构建的应用网站，我可以对话理解，传统的自然语言处理......,我有什么可以帮助您的吗~~~
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="flex flex-row space-x-3 w-[1000px]">
          <div className="text-4xl flex items-center">
            <PiFlowerTulipLight />
          </div>
          <div className="flex-1 items-end text-xl">
            <Input
              type="email"
              color="success"
              size="lg"
              placeholder=""
              className=""
            />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Main
