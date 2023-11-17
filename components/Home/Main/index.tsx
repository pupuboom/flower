'use client'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import { IoHome } from 'react-icons/io5'
import { VscTable } from 'react-icons/vsc'

const Main = () => {
  const list = [
    {
      title: '首页',
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
    <div className="flex flex-col  justify-center items-center flex-1 space-y-3">
      <div className="flex space-x-10">
        {list.map((item, index) => (
          <Card className="py-4" key={index}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large flex items-center space-x-2">
                <span>{item.icon}</span>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
              </h4>
              <small className="text-default-500">{item.describe}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={`${item.img}`}
                width={200}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Main
