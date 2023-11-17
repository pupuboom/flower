'use client'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
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

  const menuItems = [
    {
      title: '首页',
      route: '/',
    },
    {
      title: '信息抽取',
      route: '/kie',
    },
  ]
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
          <NavbarBrand className="flex space-x-2 text-lg text-sky-600">
            <div
              className="text-3xl hover:cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
              }}>
              <SiHomeassistantcommunitystore />
            </div>
            <p className="font-bold text-2xl">
              <a href="/">Ac小镇</a>
            </p>
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
                className="w-full hover:bg-gray-100 text-gray-500"
                href={item.route}
                size="lg">
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    )
  }
}
