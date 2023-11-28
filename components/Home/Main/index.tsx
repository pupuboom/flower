import { IoHome } from 'react-icons/io5'
import { VscTable } from 'react-icons/vsc'
import { Avatar } from '@nextui-org/react'

const Main = () => {
  const list = [
    {
      title: '对话机器人',
      icon: <IoHome />,
      img: '/images/house.jpg',
      describe: '欢迎来到Ac小镇',
      url: '/',
    },
    {
      title: '信息抽取',
      icon: <VscTable />,
      img: '/images/ocr.jpg',
      describe: '表格图片ocr服务及信息结构化',
      url: '/kie',
    },
  ]
  return (
    <div className="flex-1 pt-[30px] flex justify-center">
      <div className="flex gap-6 items-center">
        <Avatar className="w-6 h-6 text-tiny" name="I" />
        <Avatar name="Chat" size="sm" />
        <Avatar name="OCR" size="md" />
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          size="lg"
        />
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-20 h-20 text-large"
        />
      </div>
    </div>
  )
}

export default Main
