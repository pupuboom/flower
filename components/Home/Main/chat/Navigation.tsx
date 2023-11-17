import React from 'react'
import MenuBar from './MenuBar'
import ChatList from './ChatList'

const Navigation = () => {
  return (
    <div className="w-[305px] bg-slate-900 flex flex-col text-white overflow-y-auto">
      <MenuBar />
      <ChatList />
    </div>
  )
}

export default Navigation
