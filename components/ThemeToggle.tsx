'use client'

import { BsFillSunFill } from 'react-icons/bs'
import { BsCloudMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="hover:text-gray-300">
      {theme === 'dark' ? (
        <div
          onClick={() => {
            setTheme('light')
          }}>
          <BsFillSunFill />
        </div>
      ) : (
        <div
          onClick={() => {
            setTheme('dark')
          }}>
          <BsCloudMoonFill />
        </div>
      )}
    </div>
  )
}
