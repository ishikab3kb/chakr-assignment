'use client'


import { AtSign, Building2, ChevronFirst, ChevronLast, ChevronLeft, CircleHelp, CircleUserRound, CodeXml, Github, GithubIcon, Grid2x2Check, LogOut, Rocket, Search, Settings, SquareCheckBig, SquareMousePointer, Tags, User, UsersRound, Warehouse, Workflow } from "lucide-react"
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
import React from "react"
import { Button } from "./ui/button"
  



export default function Sidebar() {

    const [sidenav,setSidenav]=React.useState<boolean>(true); 
    const [collapse,setCollapse]=React.useState<boolean>(false);
    // console.log(sidenav);

    const mainnavMenuList = [
        {
            group: "",
            items: [
                {
                    link: "/search",
                    icon: <Search />,
                    text: "Search",
                },
                {
                    link: "/settings",
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
                    link: "/people",
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

    const settingMenuList = [
        {
            group: "User",
            items: [
                {
                    link: "/settings",
                    icon: <CircleUserRound />,
                    text: "Profile",
                },
                {
                    link: "/settings/appearance",
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
                    link: "/settings",
                    icon: <Settings />,
                    text: "General",
                },
                {
                    link: '/settings',
                    icon: <UsersRound />,
                    text: "Members",
                },
                {
                    link: '/settings',
                    icon: <Workflow />,
                    text: "Data Model"
                },
                {
                    link: '/settings',
                    icon: <CodeXml />,
                    text: "Developers"
                },
                {
                    link: '/settings',
                    icon: <Grid2x2Check/>,
                    text: "Integrations"
                },
            ]
        },
        {
            group: "Other",
            items: [
                {
                    link: "/settings",
                    icon: <Rocket />,
                    text: "Releases",
                },
                {
                    link: '/settings',
                    icon: <LogOut />,
                    text: "Logout",
                },
            ]
        },
    ]

    return <>
        {sidenav ? (<div className={!collapse ? " flex flex-col w-[300px] min-w-[300px] min-h-screen p-4 gap-4" : "w-[50px] min-h-screen p-4"}>
        {collapse ? <Button onClick={() =>setCollapse((prev) => !prev)} variant="secondary"><ChevronLast className="text-neutral-500" /></Button> : (<>
            <div className="flex items-center justify-between">
            <UserItem></UserItem>
            <Button onClick={() =>setCollapse((prev) => !prev)} variant="secondary" className="mr-2"><ChevronFirst className="text-neutral-500"/></Button>
        </div>
        <div className="grow">
        <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>
                {mainnavMenuList.map((menu: any, key: number) => (<CommandGroup key={key} heading={menu.group}>
                    {menu.items.map((option:any, optionKey: number) => (<Link href={option.link} key={optionKey} onClick={() =>{
                            if(option.text === "Settings")
                                {
                                    setSidenav(false);
                                    console.log(sidenav);
                                }
                        }}>
                        <CommandItem  className="flex gap-2 cursor-pointer">
                        {option.icon}
                        {option.text}
                        </CommandItem>
                    </Link>))}
                </CommandGroup>))}
                
            </CommandList>
        </Command>
        </div>
        <div className="flex gap-2 cursor-pointer"><CircleHelp />Support</div>
        </>)}
    </div>) : (<div className=" flex flex-col w-[300px] min-w-[300px] min-h-screen p-4 gap-4 ml-[300px]">
        <div>
            <Link href="/" onClick={() => setSidenav(true)}><Button variant="ghost"><ChevronLeft className="text-neutral-500"/></Button></Link>
            Settings
        </div>
        <div className="grow">
        <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>
                {settingMenuList.map((menu: any, key: number) => (<CommandGroup key={key} heading={menu.group}>
                    {menu.items.map((option:any, optionKey: number) => (<Link key={optionKey} href={option.link}>
                        <CommandItem  className="flex gap-2 cursor-pointer">
                        {option.icon}
                        {option.text}
                    </CommandItem></Link>))}
                </CommandGroup>))}
                
            </CommandList>
        </Command>
        </div>
        <div className="flex gap-2 cursor-pointer text-neutral-400 text-xs p-4 text-bold"><GithubIcon /> 0.20.0</div>
    </div>)}
    </>
}

