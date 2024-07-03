'use client'


import { AtSign, Building2, CircleHelp, CircleUserRound, CodeXml, Github, GithubIcon, Grid2x2Check, LogOut, Rocket, Search, Settings, SquareCheckBig, SquareMousePointer, Tags, User, UsersRound, Warehouse, Workflow } from "lucide-react"
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
  
  

export default function SettingsNav() {

    const menuList = [
        {
            group: "User",
            items: [
                {
                    link: "/",
                    icon: <CircleUserRound />,
                    text: "Profile",
                },
                {
                    link: "/",
                    icon: <Tags></Tags>,
                    text: "Appearance",
                },
                {
                    link: '/',
                    icon: <AtSign />,
                    text: "Accounts"
                },
            ]
        },
        {
            group: "Workspace",
            items: [
                {
                    link: "/",
                    icon: <Settings />,
                    text: "General",
                },
                {
                    link: '/',
                    icon: <UsersRound />,
                    text: "Members",
                },
                {
                    link: '/',
                    icon: <Workflow />,
                    text: "Data Model"
                },
                {
                    link: '/',
                    icon: <CodeXml />,
                    text: "Developers"
                },
                {
                    link: '/',
                    icon: <Grid2x2Check/>,
                    text: "Integrations"
                },
            ]
        },
        {
            group: "Other",
            items: [
                {
                    link: "/",
                    icon: <Rocket />,
                    text: "Releases",
                },
                {
                    link: '/',
                    icon: <LogOut />,
                    text: "Logout",
                },
            ]
        },
    ]

    return <div className=" flex flex-col w-[300px] min-w-[300px] min-h-screen p-4 gap-4">
        <div>
            Settings
        </div>
        <div className="grow">
        <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>
                {menuList.map((menu: any, key: number) => (<CommandGroup key={key} heading={menu.group}>
                    {menu.items.map((option:any, optionKey: number) => (<CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                        {option.icon}
                        {option.text}
                    </CommandItem>))}
                </CommandGroup>))}
                
            </CommandList>
        </Command>
        </div>
        <div className="flex gap-2 cursor-pointer text-neutral-400 text-xs p-4 text-bold"><GithubIcon /> 0.20.0</div>
    </div>
}