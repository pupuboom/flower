import { useAppContext } from '@/components/AppContext'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ActionType } from '@/reducer/AppReducer'
import { CiLogout } from 'react-icons/ci'

const ToolBar = () => {
  const { dispatch } = useAppContext()
  return (
    <div className="absolute flex items-center px-3 text-xl  bottom-0 inset-x-0 h-[60px] border-t-1 border-black">
      <div className="flex items-center text-white justify-between px-4  py-1 w-full rounded-lg h-2/3 ">
        <ThemeToggle />
        <div
          onClick={() => {
            dispatch({
              type: ActionType.UPDATE,
              field: 'navHidden',
              value: true,
            })
          }}
          className="hover:text-gray-300">
          <CiLogout />
        </div>
      </div>
    </div>
  )
}

export default ToolBar
