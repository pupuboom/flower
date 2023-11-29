import { useAppContext } from '@/components/AppContext'
import { Avatar } from '@nextui-org/react'
import MarkDown from '@/components/common/Markdown'
import { ScrollShadow } from '@nextui-org/react'
// import Markdown from 'markdown-to-jsx'

const MessageList = () => {
  const {
    state: { messageList },
  } = useAppContext()
  return (
    <div className="w-full h-screen">
      <ScrollShadow className="h-[85%]">
        <ul className="">
          <div className="h-2"></div>
          {messageList.map((item, index) =>
            item.role === 'assistant' ? (
              <div
                key={index}
                className="bg-gray-100 px-3 py-6 dark:bg-slate-700">
                <div
                  key={index}
                  className="w-4/5 mx-auto flex flex-row items-start space-x-3">
                  <div className="">
                    <Avatar name="AI" isBordered radius="full" />
                  </div>
                  <div className="py-2 flex-1">
                    <li className="w-full">
                      <MarkDown>{item.content}</MarkDown>
                      {/* <Markdown options={{ forceBlock: true }}>
                        {item.content}
                      </Markdown> */}
                    </li>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="px-3 py-4 dark:bg-slate-600">
                <div
                  key={index}
                  className="w-4/5 mx-auto flex flex-row items-start space-x-3 ">
                  <div className="">
                    <Avatar
                      name="Me"
                      isBordered
                      radius="full"
                      color="success"
                    />
                  </div>
                  <div className="py-2">
                    <li>
                      <MarkDown>{item.content}</MarkDown>
                      {/* <Markdown>{item.content}</Markdown> */}
                    </li>
                  </div>
                </div>
              </div>
            )
          )}
        </ul>
      </ScrollShadow>
    </div>
  )
}

export default MessageList
