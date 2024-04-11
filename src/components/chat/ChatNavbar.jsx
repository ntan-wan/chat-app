import { useSite } from '@/providers/SiteProvider';

import { Avatar } from '@/components/ui/Avatar'
import { MagnifyingGlass } from '@/components/icons/MagnifyingGlass'
import {Input} from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Phone } from '@/components/icons/Phone'
import { ElipsisVertical } from '@/components/icons/ElipsisVertical'
import { Video } from '@/components/icons/Video'

export function ChatNavbar() {
    
    const {userId, normalizedContactData, filterKeyword, setFilterKeyword} = useSite();

    const contact = normalizedContactData[userId];

    const handleSearch = (value) => {
        setFilterKeyword(value);
    }

    return <nav>
        <nav className='flex flex-col  justify-between gap-6 border-b border-neutral-300 p-3 pb-4 sm:flex-row sm:items-center'>
            <div className='flex gap-3 items-center'>
                <div>
                    {contact && <Avatar url={contact?.profileImage}/> }
                </div>
                <div>
                    <p className='font-semibold'>{contact?.username}</p>
                    <p className='text-sm text-neutral-500'>{contact?.position}</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <Input Icon={MagnifyingGlass} placeholder="Search"  value={filterKeyword}  onChange={(e) => handleSearch(e.target.value)}/>
                <div className='hidden  gap-3 sm:flex'>
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
            </div>
        </nav>
    </nav>
}