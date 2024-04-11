import { useEffect } from 'react'
import { useContacts } from '@/hooks/useContacts'
import { useSite } from '@/providers/SiteProvider';
import { normalizeContactData } from '@/lib/utils'
import { useChats } from '@/hooks/useChats'

import { ContactSearch } from '@/components/contact/ContactSearch.jsx'
import { ContactGroup } from '@/components/contact/ContactGroup.jsx'
import { Chat } from '@/components/chat/Chat'
import { UserDetails } from '@/components/user/UserDetails';

export function Home() {
    const { setUserId, setNormalizedContactData } = useSite()
    const [contactsData] = useContacts();
    useChats();

    useEffect(() => {
        if (contactsData) {
            setUserId(contactsData[0].id);
            setNormalizedContactData(normalizeContactData(contactsData))
        }
    }, [contactsData])

    // return (<div className="flex  flex-col gap-4 md:flex-row">
    //     <div className="w-full flex flex-col gap-4 md:w-3/12">
    //         <ContactSearch />
    //         <ContactGroup />
    //     </div>
    //     <div className="flex flex-col w-full md:w-6/12">
    //         <Chat/>
    //     </div>
    //     <div className="w-full md:w-3/12">
    //         <UserDetails />
    //     </div>
    // </div>)

    return (<div className="flex flex-wrap  flex-col  md:flex-row">
        <div className="w-full flex flex-col gap-4 py-2 sm:px-2 md:w-4/12 lg:w-3/12">
            <ContactSearch />
            <ContactGroup />
        </div>
        <div className="flex flex-col w-full py-2 sm:px-2 md:w-8/12 lg:w-6/12">
            <Chat />
        </div>
        <div className="w-full py-2 sm:px-2 md:w-full lg:w-3/12">
            <UserDetails />
        </div>
    </div>)
}