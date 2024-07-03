'use client';

import { Building2, Plus, User } from "lucide-react";

export default function Header(title:String) {
return <div className="header flex justify-between items-center w-full p-2 text-neutral-500">
    <div className="flex gap-1">
    <Building2></Building2>
        <p>Companies</p>
    </div>
    <div className="border rounded p-2"><Plus /></div>
</div>
}