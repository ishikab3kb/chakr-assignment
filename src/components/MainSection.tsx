'use client';

import { Building2, Plus } from "lucide-react";
import Header from "./Header";
import { Tablebox } from "./Tablebox";

export default function MainSection() {
return <div className="mainSection w-full overflow-hidden">
    <div className="header flex justify-between items-center w-full p-2 text-neutral-500">
    <div className="flex gap-1">
    <Building2></Building2>
        <p>Companies</p>
    </div>
    <div className="border rounded p-2"><Plus /></div>
</div>
    <Tablebox></Tablebox>
</div>
};