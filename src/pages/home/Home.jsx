import { useEffect, useState } from 'react'
import { useContacts } from '@/hooks/useContacts'
import { useChatById } from '@/hooks/useChats';
import { useGroupList } from '@/hooks/useContacts'
import { useSelector, useDispatch } from 'react-redux'
import { setUserId } from '@/slices/siteSlice';
import { setNormalizedContactData } from '@/slices/siteSlice';
import {setPersonalChat} from '@/slices/siteSlice'

import { ContactSearch } from '@/components/contact/ContactSearch.jsx'
import { ContactGroup } from '@/components/contact/ContactGroup.jsx'
import { Chat } from '@/components/chat/Chat'
import { UserDetails } from '@/components/user/UserDetails';


export function Home() {

    const dispatch = useDispatch()
    const personalChat = useSelector((state) => state.site.personalChat)
    const userId = useSelector((state) => state.site.userId)
    const normalizedContactData = useSelector((state) => state.site.normalizedContactData);
    const {contactsData} = useContacts();
    const {groupListData} = useGroupList()
    const {personalChatData}= useChatById(userId)
    const [user, setUser] = useState(null)
    
    
    useEffect(() => {

        if (contactsData) {
            dispatch(setUserId(contactsData[0].id))
            dispatch(setNormalizedContactData(contactsData))
        }
    }, [contactsData])
    useEffect(() => {
        if (personalChatData) {
            dispatch(setPersonalChat(personalChatData))
            setUser(normalizedContactData[userId])
        }
    }, [personalChatData])
    

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