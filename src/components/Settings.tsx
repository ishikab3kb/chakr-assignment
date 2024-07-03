'use client';

import SettingsNav from "./SettingsNav";
import { Userdata } from "./Userdata";

export default function Settings() {
return <div className="flex justify-center m-auto max-w-screen ml-[300px] max-h-screen">
    <SettingsNav></SettingsNav>
    <Userdata></Userdata>
</div>
}