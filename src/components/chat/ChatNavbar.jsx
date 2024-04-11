import { useState } from 'react';
import { useSite } from '@/providers/SiteProvider';
// import {useQueryClient} from '@tanstack/react-query'

import { Avatar } from '@/components/ui/Avatar'
import { MagnifyingGlass } from '@/components/icons/MagnifyingGlass'
import {Input} from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Phone } from '@/components/icons/Phone'
import { ElipsisVertical } from '@/components/icons/ElipsisVertical'
import { Video } from '@/components/icons/Video'

export function ChatNavbar() {
    
    // const queryClient = useQueryClient();
    const {userId, normalizedContactData} = useSite();
    const [searchValue, setSearchValue] = useState('')

    const contact = normalizedContactData[userId];

    const handleSearch = (value) => {
        setSearchValue(value);
    }

    return <nav>
        <nav className='flex items-center justify-between border-b border-neutral-300 p-3 pb-4'>
            <div className='flex gap-3'>
                <div>
                    {contact && <Avatar url={contact?.profileImage}/> }
                </div>
                <div>
                    <p className='font-semibold'>{contact?.username}</p>
                    <p className='text-sm text-neutral-500'>{contact?.position}</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Input Icon={MagnifyingGlass} placeholder="Search"  value={searchValue}  onChange={(e) => handleSearch(e.target.value)}/>
                <Button variant='circle'>
                    <Phone />
                </Button>
                <Button variant='circle'>
                    <Video />
                </Button>
                <Button variant='circle'>
                    <ElipsisVertical />
                </Button>
            </div>
        </nav>
    </nav>
}