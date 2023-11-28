import { Button } from '@/components/ui/button'
import React from 'react'
import { BsFlower2 } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'

const MenuBar = () => {
  return (
    <div className="flex h-[70px] justify-center items-center border-b-1 border-black">
      <div className="w-[280px] h-[45px]">
        <Button className="bg-gray-800 text-white flex space-x-2 justify-between items-center w-full hover:bg-gray-600 h-full text-xl">
          <div className="flex items-center h-full space-x-2">
            <BsFlower2 />
            <p className="text-base ">新建对话</p>
          </div>
          <BiEdit />
        </Button>
      </div>
    </div>
  )
}

export default MenuBar
