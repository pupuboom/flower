'use client'
import { BsFlower1 } from 'react-icons/bs'
import { RiLogoutCircleLine } from 'react-icons/ri'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from '@nextui-org/react'

import { useSession, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()
  if (session) {
    const { user } = session
    return (
      <Navbar className="items-end basis-8" isBordered maxWidth="full">
        <NavbarBrand className="flex space-x-4 text-lg">
          <div className="text-4xl">
            <BsFlower1 />
          </div>
          <p className="font-bold text-inherit">微调</p>
        </NavbarBrand>

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
      </Navbar>
    )
  }
}
