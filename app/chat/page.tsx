import ChatMain from '@/components/Home/Main/chat/ChatMain'
import Navigation from '@/components/Home/Main/chat/Navigation'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-1">
      <Navigation />
      <ChatMain />
    </div>
  )
}

export default index
