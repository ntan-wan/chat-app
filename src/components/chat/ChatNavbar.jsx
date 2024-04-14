import { useSite } from '@/providers/SiteProvider';
import PropTypes from 'prop-types'

import { Avatar } from '@/components/ui/Avatar'
import { MagnifyingGlass } from '@/components/icons/MagnifyingGlass'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Phone } from '@/components/icons/Phone'
import { ElipsisVertical } from '@/components/icons/ElipsisVertical'
import { Video } from '@/components/icons/Video'

export function ChatNavbar({handleFilter}) {

    const { userId, normalizedContactData } = useSite();
    const contact = normalizedContactData[userId];
    const buttons = [{ label: 'Phone', Icon: Phone }, { label: 'Video', Icon: Video }, { label: 'Others', Icon: ElipsisVertical }]
    

    return (
        <nav className='flex flex-col  justify-between gap-6 border-b border-neutral-300 p-3 pb-4 sm:flex-row sm:items-center'>
            <div className='flex gap-3 items-center'>
                <div>
                    {contact && <Avatar url={contact?.profileImage} />}
                </div>
                <div>
                    <p className='font-semibold'>{contact?.username}</p>
                    <p className='text-sm text-neutral-500'>{contact?.position}</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <Input Icon={MagnifyingGlass} placeholder="Search" onChange={(e) => handleFilter(e.target.value)} />
                <div className='hidden  gap-3 sm:flex'>
                    {buttons.map((button) => <Button variant='circle' key={button.label}><button.Icon /></Button>)}
                </div>
            </div>
        </nav>
    )
}
ChatNavbar.propTypes = {
    handleFilter: PropTypes.func
}