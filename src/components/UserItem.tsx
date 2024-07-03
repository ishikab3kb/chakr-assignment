'use client'

import { Apple } from "lucide-react"

export default function UserItem() {
    return <div className="flex items-center justify-between gap-2">
        <div className="avatar min-h-10 min-w-10 text-black font-[700] flex items-center justify-center">
            <Apple fill='black' />
        </div>
        <div className="grow">
            <p className="text-[16px] font-semibold text-black">Demo</p>
        </div>
    </div>
}