import { useEffect, useState } from 'react'
import { useContacts } from '@/hooks/useContacts'
import {useSite} from '@/hooks/useSite';

import { normalizeContactData } from '@/lib/utils'
import { useGroupList } from '@/hooks/useContacts'
import { getChatById } from '@/services/serviceChat';

import { ContactSearch } from '@/components/contact/ContactSearch.jsx'
import { ContactGroup } from '@/components/contact/ContactGroup.jsx'
import { Chat } from '@/components/chat/Chat'
import { UserDetails } from '@/components/user/UserDetails';


export function Home() {

    const { userId, setUserId, personalChat, setPersonalChat, normalizedContactData, setNormalizedContactData } = useSite()
    const [contactsData] = useContacts();
    const [groupListData] = useGroupList()
    const [user, setUser] = useState(null)


    useEffect(() => {
        if (contactsData) {
            setUserId(contactsData[0].id);
            setNormalizedContactData(normalizeContactData(contactsData))
        }
    }, [contactsData])
    useEffect( () => {
        if (userId) {
            (async () => {
                const res = await getChatById(null, userId);
                setPersonalChat(res.data)
            })();
            setUser(normalizedContactData[userId])
        }
    }, [userId])



    return (
        <div className="flex flex-wrap flex-col md:flex-row">
            <div className="w-full flex flex-col gap-4 py-2 sm:px-2 md:w-4/12 lg:w-3/12">
                <ContactSearch  contacts={contactsData}/>
                <ContactGroup  groupList={groupListData}/>
            </div>
            <div className="w-full flex flex-col py-2 sm:px-2 md:w-8/12 lg:w-6/12">
                <Chat personalChat={personalChat} />
            </div>
            <div className="w-full py-2 sm:px-2 md:w-full lg:w-3/12">
                <UserDetails user={user}/>
            </div>
        </div>
    )
}