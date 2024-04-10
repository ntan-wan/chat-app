import { useEffect } from 'react'
import { useContacts } from '@/hooks/useContacts'
import { useSite } from '@/providers/SiteProvider'

import {ContactSearch} from '@/components/contact/ContactSearch.jsx'
import {ContactGroup} from '@/components/contact/ContactGroup.jsx'
import { Chat } from '@/components/chat/Chat'
import { UserDetails } from '@/components/user/UserDetails'

export function Home() {
    const {setUserId} = useSite()
    const [contactsData] = useContacts();

    useEffect(() => {contactsData && setUserId(contactsData[0].id)} ,[contactsData])

    return (<div className="flex gap-4">
        <div className="w-3/12 flex flex-col gap-4">
            <ContactSearch />
            <ContactGroup />
        </div>
        <div className="flex flex-col w-6/12">
            <Chat/>
        </div>
        <div className="w-3/12">
            <UserDetails />
        </div>
    </div>)
}