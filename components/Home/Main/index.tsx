'use client'
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { FloatButton, Switch } from 'antd'
import { IoHome } from 'react-icons/io5'
import { VscTable } from 'react-icons/vsc'
import { Carousel } from 'antd'

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
    <div className="flex-1 flex pt-[30px]">
      <FloatButton.Group
        trigger="click"
        style={{ right: 24, top: 100 }}
        className="flex flex-row"
        icon={<CustomerServiceOutlined />}>
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </div>
  )
}

export default Main
