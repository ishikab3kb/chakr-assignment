import Header from '@/components/Header'
import { PeopleTable } from '@/components/PeopleTable'
import { Plus, User } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='w-full overflow-hidden"'>
            <div className="header flex justify-between items-center w-full p-2 text-neutral-500">
        <div className="flex gap-1">
        <User></User>
            <p>People</p>
        </div>
        <div className="border rounded p-2"><Plus /></div>
    </div>
        <PeopleTable></PeopleTable>
    </div>
  )
}