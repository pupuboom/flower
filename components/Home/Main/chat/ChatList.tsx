import { IoChatboxEllipsesOutline } from 'react-icons/io5'

const ChatList = () => {
  const chatList = [
    {
      title: 'langchain怎么学langchain怎么学langchain怎么学langchain怎么学',
    },
    {
      title: 'langchain怎么用',
    },
    {
      title: 'autogen怎么学',
    },
    {
      title: 'auto怎么用',
    },
    {
      title: 'langchain怎么学langchain怎么学langchain怎么学langchain怎么学',
    },
    {
      title: 'langchain怎么用',
    },
    {
      title: 'langchain怎么学langchain怎么学langchain怎么学langchain怎么学',
    },
    {
      title: 'langchain怎么用',
    },
    {
      title: 'autogen怎么学',
    },
    {
      title: 'auto怎么用',
    },
    {
      title: 'langchain怎么学langchain怎么学langchain怎么学langchain怎么学',
    },
    {
      title: 'langchain怎么用',
    },
    {
      title: 'langchain怎么学langchain怎么学langchain怎么学langchain怎么学',
    },
    {
      title: 'langchain怎么用',
    },
    {
      title: 'autogen怎么学',
    },
    {
      title: 'auto怎么用',
    },
    {
      title: 'langchain怎么学langchain怎么学langchain怎么学langchain怎么学',
    },
    {
      title: 'langchain怎么用',
    },
  ]
  return (
    <div className="flex-1 flex flex-col max-h-[76vh] py-5 px-3 overflow-y-auto">
      <ul className="w-full text-base">
        {chatList.map((item, index) => (
          <li
            key={index}
            className="hover:bg-slate-600 w-full h-[43px] rounded-md flex items-center px-4 whitespace-nowrap overflow-hidden space-x-2">
            <div className="text-lg">
              <IoChatboxEllipsesOutline />
            </div>
            <p className="text-base overflow-hidden">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChatList
