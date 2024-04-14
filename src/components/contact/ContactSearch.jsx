import PropTypes from 'prop-types'
import { useState } from 'react'
import {useSite} from '@/hooks/useSite';

import { formatTime } from '@/lib/utils'
import { useQueryClient } from '@tanstack/react-query';
import { MY_USER_ID } from '@/constants'
import { scrollToView } from '@/lib/utils'

import { Input } from "@/components/ui/Input"
import { Avatar } from "@/components/ui/Avatar"
import { Badge } from "@/components/ui/Badge"
import { Tick } from "@/components/icons/Tick"
import { MagnifyingGlass } from '@/components/icons/MagnifyingGlass'
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Skeleton } from "@/components/ui/Skeleton"


function ContactDisplayer({ contact }) {

    const { setUserId } = useSite()
    const queryClient = useQueryClient();
    const chatsData = queryClient.getQueryData(['getChats'])?.data
    let personalChat = [];
    let latestChat = null

    const noChatFound = (myChat, chats) => {
        return myChat.length === chats.length
    }
    const handleClick = (contactData) => {
        setUserId(contactData.id)
        if (window.innerWidth < 768) {
            scrollToView('chats')
        }
    }

    if (chatsData) {
        if (contact.id === MY_USER_ID) {
            personalChat = chatsData.filter((chat) => chat.fromUser === contact.id && chat.toUser === contact.id);
        } else {
            personalChat = chatsData.filter((chat) => chat.fromUser === contact.id || chat.toUser === contact.id);
        }
        latestChat = noChatFound(personalChat, chatsData) ? null : personalChat.reduce((latest, current) => {
            return current.timestamp > latest.timestamp ? current : latest
        }, personalChat[0])
    }

    return (
        <div className="cursor-pointer rounded-lg flex gap-3 p-3 hover:bg-neutral-100" onClick={() => handleClick(contact)}>
            <div><Avatar url={contact.profileImage} /></div>
            <div className="grow">
                <p className="flex justify-between">
                    {contact.username}
                    {latestChat && latestChat?.fromUser !== MY_USER_ID && <Badge>1</Badge>}
                </p>
                {
                    latestChat && <>
                        <p className="mt-1 text-neutral-400 text-sm truncate text-ellipsis w-48 sm:w-96 md:w-20 lg:w-50 xl:w-52">{latestChat?.message}</p>
                        <p className="flex justify-between items-center text-xs font-bold">
                            <span className='text-xs text-neutral-500 font-medium'>{formatTime(latestChat?.timestamp)}
                            </span> <Tick />
                        </p>
                    </>
                }
            </div>
        </div>
    )
}
ContactDisplayer.propTypes = {
    contact: PropTypes.object,
}


function renderView(filteredContacts, isLoading) {
    if (isLoading) {
        return (
            <div className='flex flex-col gap-4'>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        )
    } else if (filteredContacts.length) {
        return (
            filteredContacts.map((contact) => <ContactDisplayer key={contact.id} contact={contact} />)
        )
    } else {
        return (
            <p className='p-3 text-center text-neutral-400'><i >No Contact Found</i></p>
        )
    }
}

export function ContactSearch({ contacts }) {

    const [searchValue, setSearchValue] = useState('');
    const isLoading = !contacts;
    let filteredContact = [];

    const handleSearch = (value) => {
        setSearchValue(value);
    }

    if (contacts) {
        filteredContact = contacts.filter((contact) => contact.username.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return (
        <Card >
            <Input Icon={MagnifyingGlass} placeholder="Search Contact" value={searchValue} onChange={(e) => handleSearch(e.target.value)} />

            <div className='mt-4 overflow-auto h-[260px]'>
                {renderView(filteredContact, isLoading)}
            </div>

            <div className="mt-5 flex justify-between gap-4">
                <Button className="grow">Meeting</Button>
                <Button className="grow" variant="plain">Schedule</Button>
            </div>
        </Card>
    )
}
ContactSearch.propTypes = {
    contacts: PropTypes.array
}