import PropTypes from 'prop-types'
import { cn } from '@/lib/utils'
import { useSite } from '@/providers/SiteProvider';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Card } from '@/components/ui/Card'
import { AvatarAlphabet } from '@/components/ui/AvatarAlphabet';
import { AvatarGroup } from '@/components/ui/AvatarGroup'
import { Button } from '@/components/ui/Button'
import { Video } from '@/components/icons/Video'
import { ChatBubble } from '@/components/icons/ChatBubble'
import { UserPlus } from '@/components/icons/UserPlus'
import { InfoCircle } from '@/components/icons/InfoCircle'
import { Photo } from '@/components/icons/Photo'
import { UserGroup } from '@/components/icons/UserGroup'
import { MapPin  } from '@/components/icons/MapPin'
import dummyImg1 from '@/assets/imgs/dummyImg1.jpg'
import dummyImg2 from '@/assets/imgs/dummyImg2.jpg'
import dummyImg3 from '@/assets/imgs/dummyImg3.jpg'


function UserCard({ user, className }) {
    return (
        <Card className={cn('text-center ', className)}>
            <p className='font-medium text-lg'>{user?.username}</p>
            <p className='text-neutral-500'>{user?.position}</p>
            <p className='mt-2 font-medium flex items-center justify-center gap-2'><MapPin className='text-neutral-400'/>{user?.address}</p>
            <div className='mt-4 flex items-center justify-center gap-3'>
                <Button variant='circle'><UserPlus /></Button>
                <Button variant='circle' className="bg-primary border-primary hover:bg-indigo-400 text-white"><ChatBubble /></Button>
                <Button variant='circle' className="bg-red-500 text-white border-red-500 hover:bg-red-400 hover:border-red-400" ><Video /></Button>
            </div>
        </Card>
    )
}
UserCard.propTypes = {
    className: PropTypes.string,
    user: PropTypes.object
}

export function UserDetails() {
    const { userId, normalizedContactData } = useSite();

    const user = normalizedContactData[userId]

    return (<Card className='h-full p-0 xl:overflow-auto c-userDetail-height'>
        <div className='relative flex justify-center'>
            <LazyLoadImage  src={user?.profileImage} className='rounded-bl-lg rounded-br-lg z-10' />
            <UserCard user={user} className=' w-10/12 absolute bottom-[-25%] right-[9%] z-10' />
        </div>


        <div className=' mt-28 border-t border-b border-neutral-300 p-4 flex flex-col gap-3'>
            <h3 className='flex items-center justify-between  mb-2'>User Information <InfoCircle className='text-neutral-400' /></h3>
            <div className='c-field'>
                <label>Phone</label>
                <p>{user?.phone}</p>
            </div>
            <div className='c-field'>
                <label>Email</label>
                <p>{user?.email}</p>
            </div>
        </div>

        <div className='border-b border-neutral-300 p-4 flex flex-col gap-3'>
            <h3 className='mb-2 flex justify-between items-center'>Group Participants <UserGroup className='text-neutral-400' /></h3>
            <div className='flex items-center justify-between'>
                <div>
                    <AvatarAlphabet label='M' />
                </div>
                <div>
                    {/* <AvatarGroup usersArr={}/> */}
                </div>
            </div>
        </div>

        <div className='p-4'>
            <h3 className='flex justify-between items-center'>Media <Photo className='text-neutral-400'/></h3>

            <div className='mt-5 flex items-center gap-3'>
                <div>
                    <LazyLoadImage className='max-w-full' src={dummyImg1} />

                </div>
                <div>

                    <LazyLoadImage className='max-w-full' src={dummyImg2} />
                </div>
                <div>
                    <LazyLoadImage className='max-w-full' src={dummyImg3} />

                </div>
            </div>
        </div>
    </Card>)
}

UserDetails.propTypes = {
    user: PropTypes.object
}