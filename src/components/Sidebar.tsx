'use client'


import { Building2, CircleHelp, Search, Settings, SquareCheckBig, SquareMousePointer, User, Warehouse } from "lucide-react"
import UserItem from "./UserItem"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Link from "next/link"
  
  

export default function Sidebar() {

    const menuList = [
        {
            group: "",
            items: [
                {
                    link: "/Components",
                    icon: <Search />,
                    text: "Search",
                },
                {
                    link: "/",
                    icon: <Settings />,
                    text: "Settings",
                },
                {
                    link: '/',
                    icon: <SquareCheckBig />,
                    text: "Tasks"
                },
            ]
        },
        {
            group: "Workspace",
            items: [
                {
                    link: "/",
                    icon: <User></User>,
                    text: "People",
                },
                {
                    link: '/',
                    icon: <Building2 />,
                    text: "Companies",
                },
                {
                    link: '/',
                    icon: <SquareMousePointer />,
                    text: "Opportunities"
                },
                {
                    link: '/',
                    icon: <Warehouse />,
                    text: "Household"
                },
            ]
        },
    ]

    return <div className=" flex flex-col w-[300px] min-w-[300px] min-h-screen p-4 gap-4">
        <div>
            <UserItem></UserItem>
        </div>
        <div className="grow">
        <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>
                {menuList.map((menu: any, key: number) => (<CommandGroup key={key} heading={menu.group}>
                    {menu.items.map((option:any, optionKey: number) => (<Link href={option.link} key={optionKey}><CommandItem  className="flex gap-2 cursor-pointer">
                        {option.icon}
                        {option.text}
                    </CommandItem></Link>))}
                </CommandGroup>))}
                
            </CommandList>
        </Command>
        </div>
        <div className="flex gap-2 cursor-pointer"><CircleHelp />Support</div>
    </div>
}