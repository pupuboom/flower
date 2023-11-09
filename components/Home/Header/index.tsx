'use client'
import { BsFlower1 } from 'react-icons/bs'
import { HiMenuAlt1 } from 'react-icons/hi'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'

import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Header() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['AI助手', '医疗对话问诊', '文本总结']
  if (session) {
    const { user } = session
    return (
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="items-end basis-8"
        isBordered
        maxWidth="full">
        <NavbarContent justify="start">
          <NavbarBrand className="flex space-x-4 text-lg text-sky-600">
            <div
              className="text-4xl hover:cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
              }}>
              <HiMenuAlt1 />
            </div>
            <p className="font-bold">欢乐小镇</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Dropdown>
              <DropdownTrigger>
                {user?.image ? (
                  <User
                    name={user.name}
                    description={user.email}
                    avatarProps={{
                      src: `${user.image}`,
                    }}
                  />
                ) : (
                  // <Avatar src={user?.image} color="default" />
                  ''
                )}
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  onClick={() => {
                    signOut()
                  }}>
                  注销
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem></NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                className="w-full hover:bg-gray-100"
                href="#"
                size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    )
  }
}
