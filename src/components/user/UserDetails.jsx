import dummyUserDetail from '@/assets/jsons/userDetail.json'
import PropTypes from 'prop-types'
import {cn} from '@/lib/utils'

import { Card } from '@/components/ui/Card'
import { AvatarAlphabet } from '@/components/ui/AvatarAlphabet';
import { AvatarGroup } from '@/components/ui/AvatarGroup'
import { Button } from '@/components/ui/Button'

function UserCard({className}) {
    return (
        <Card className={cn('text-center ',className)}>
            <p>{dummyUserDetail.username}</p>
            <p>{dummyUserDetail.position}</p>
            <p>{dummyUserDetail.address}</p>
            <div className='flex items-center justify-center gap-3'>
                <Button>
                    test
                </Button>
                <Button>
                    test
                </Button>
                <Button>
                    test
                </Button>
            </div>
        </Card>
    )
}
UserCard.propTypes = {
    className: PropTypes.string
}

export function UserDetails({ user }) {
    return (<Card className='h-full p-0 overflow-hidden'>
        <div>
            <img src={dummyUserDetail.profileImage} className='rounded-bl-lg rounded-br-lg' />
        </div>

        {/* <UserCard className=''/> */}

        <div className='border-b border-neutral-300 p-4 flex flex-col gap-3'>
            <h3 className='font-medium mb-2'>User Information</h3>
            <div className='c-field'>
                <label>Phone</label>
                <p>{dummyUserDetail.phone}</p>
            </div>
            <div className='c-field'>
                <label>Email</label>
                <p>{dummyUserDetail.email}</p>
            </div>
        </div>

        <div className='border-b border-neutral-300 p-4'>
            <h3>Group Participants</h3>
            <div className='flex items-center justify-between'>
                <div>
                    <AvatarAlphabet label='M' />
                </div>
                <div>
                    {/* <AvatarGroup usersArr={}/> */}
                </div>
            </div>
        </div>

        <div>
            <h3>Media</h3>
        </div>
    </Card>)
}

UserDetails.propTypes = {
    user: PropTypes.object
}