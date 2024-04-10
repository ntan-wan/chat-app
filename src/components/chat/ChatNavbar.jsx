import { Avatar } from '@/components/ui/Avatar'
import { MagnifyingGlass } from '@/components/icons/MagnifyingGlass'
import {Input} from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Phone } from '@/components/icons/Phone'
import { ElipsisVertical } from '@/components/icons/ElipsisVertical'
import { Video } from '@/components/icons/Video'

export function ChatNavbar() {
    return <nav>
        <nav className='flex items-center justify-between border-b border-neutral-300 p-3 pb-4'>
            <div className='flex gap-3'>
                <div>
                    <Avatar />
                </div>
                <div>
                    <p className='font-semibold'>Kevin</p>
                    <p className='text-sm text-neutral-500'>UI / UX Designer</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Input Icon={MagnifyingGlass} placeholder="Search"   />
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