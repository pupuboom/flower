'use client'
import React from 'react'
import MenuBar from './MenuBar'
import ChatList from './ChatList'
import ToolBar from './ToolBar'
import { useAppContext } from '@/components/AppContext'
import { ActionType } from '@/reducer/AppReducer'

const Navigation = () => {
  const {
    state: { navHidden },
  } = useAppContext()
  return (
    <>
      {!navHidden && (
        <div className="relative w-[305px] bg-gray-800 flex flex-col text-white overflow-y-auto">
          <MenuBar />
          <ChatList />
          <ToolBar />
        </div>
      )}
    </>
  )
}

export default Navigation
