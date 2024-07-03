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
  
  

export default function PeoplePage(user: {
    userId: number;
    email: string;
    name: string;
    mobile: String;
  status: String;
  wtf: String;
  phone: String;
  company: String;
  }) {

    
    return <div className=" flex flex-col w-[300px] min-w-[300px] min-h-screen p-4 gap-4">
        <div>
            Settings
        </div>
        <div className="grow">
        <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>
                <CommandGroup>
                    <CommandItem>
                        <p className="text-xs text-neutral-400">Email</p>
                        <p className="text-xs">{user.email}</p>
                    </CommandItem>
                    <CommandItem>
                        <p className="text-xs text-neutral-400">Mobile</p>
                        <p className="text-xs">{user.mobile}</p>
                    </CommandItem>
                    <CommandItem>
                        <p className="text-xs text-neutral-400">Phone</p>
                        <p className="text-xs">{user.phone}</p>
                    </CommandItem>
                    <CommandItem>
                        <p className="text-xs text-neutral-400">Status</p>
                        <p className="text-xs">{user.status}</p>
                    </CommandItem>
                    <CommandItem>
                        <p className="text-xs text-neutral-400">WTF</p>
                        <p className="text-xs">{user.wtf}</p>
                    </CommandItem>
                </CommandGroup>
                <CommandGroup>
                    <CommandItem>{user.company}</CommandItem>
                </CommandGroup>
                
            </CommandList>
        </Command>
        </div>
        <div className="flex gap-2 cursor-pointer text-neutral-400 text-xs p-4 text-bold"><GithubIcon /> 0.20.0</div>
    </div>
}