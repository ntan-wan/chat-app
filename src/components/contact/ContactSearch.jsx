import PropTypes from 'prop-types'
import { useState } from 'react'
import { useContacts } from '@/hooks/useContacts'
import { useSite } from '@/providers/SiteProvider'

import { Input } from "@/components/ui/Input"
import { Avatar } from "@/components/ui/Avatar"
import { Badge } from "@/components/ui/Badge"
import { Tick } from "@/components/icons/Tick"
import { MagnifyingGlass } from '@/components/icons/MagnifyingGlass'
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Skeleton } from "@/components/ui/Skeleton"

function ContactDisplayer({ contact }) {

    const {setUserId} = useSite()
    
    const handleClick = (contactData) => {
        setUserId(contactData.id)
    }
    
    return (
        <div className="flex gap-3 p-3 hover:bg-neutral-100 cursor-pointer rounded-lg" onClick={() => handleClick(contact)}>
            <div><Avatar url={contact.profileImage} /></div>
            <div className="grow">
                <p className="flex justify-between">{contact.username}
                    <Badge>{contact.notification}</Badge>
                </p>
                <p className="text-neutral-400">{contact.lastText}</p>
                <p className="flex justify-between items-center text-xs font-bold">{contact.updatedAt} <Tick /></p>
            </div>
        </div>
    )
}
ContactDisplayer.propTypes = {
    contact: PropTypes.object,
}

export function ContactSearch() {

    const [searchValue, setSearchValue] = useState('');
    const [contactsData, isLoading] = useContacts();

    let contacts = []
    let filteredContact = [];

    if (contactsData) {
        contacts = contactsData;
        filteredContact = contacts.filter((contact) => contact.username.toLowerCase().includes(searchValue.toLowerCase()))
    }

    const handleSearch = (value) => {
        setSearchValue(value);
    }

    return (<Card>
        <Input Icon={MagnifyingGlass} placeholder="Search Contact" value={searchValue} handleOnChange={(e) => handleSearch(e.target.value)} />
        <div className='mt-4'>

            {isLoading && <div className='flex flex-col gap-4'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            </div>}

            {!isLoading && filteredContact.length ?
                filteredContact.map((contact) => <ContactDisplayer key={contact.id} contact={contact} />) : <p className='p-3 text-center text-neutral-400'><i >No Contact Found</i></p>
            }
        </div>


        <div className="mt-5 flex justify-between gap-4">
            <Button className="grow">Meeting</Button>
            <Button className="grow" variant="plain">Schedule</Button>
        </div>
    </Card>)
}