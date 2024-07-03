"use client"

import * as React from "react"
import {
    Building2,
  CreditCard,
  Settings,
  SquareCheckBig,
  SquareMousePointer,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { DialogDemo } from "./DialogDemo"

export function SearchCommandBar() {
  const [open, setOpen] = React.useState(false)

  const menuList = [
    {
        group: "CREATE",
        items: [
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
                text: "Go to People",
            },
            {
                link: '/',
                icon: <Building2 />,
                text: "Go to Companies",
            },
            {
                link: '/',
                icon: <SquareMousePointer />,
                text: "Go to Opportunities"
            },
            {
                link: '/',
                icon: <Settings />,
                text: "Settings"
            },
            {
                link: '/',
                icon: <SquareCheckBig />,
                text: "Tasks"
            },
        ]
    },
]

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
        
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {menuList.map((menu: any, key: number) => (<CommandGroup key={key} heading={menu.group}>
                    {menu.items.map((option:any, optionKey: number) => (<CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                        {option.icon}
                        {option.text}
                    </CommandItem>))}
                </CommandGroup>))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
