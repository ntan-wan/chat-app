import PropTypes from 'prop-types';
import { useSite } from '@/providers/SiteProvider';

import { Card } from '@/components/ui/Card'
import { AvatarAlphabet } from '@/components/ui/AvatarAlphabet'
import { Button } from '@/components/ui/Button'
import {Plus} from '@/components/icons/Plus'
import {AvatarGroup} from '@/components/ui/AvatarGroup'

const dummyGroup = [
    {
        "id": 1,
        "name": "App Development",
        "users": [
            2,
            3,
            5
        ]
    },
    {
        "id": 2,
        "name": "UI/UX Designs",
        "users": [
            2
        ]
    },
    {
        "id": 3,
        "name": "iSpring ABC Team",
        "users": []
    },
    {
        "id": 4,
        "name": "Marketing",
        "users": [
            1,
            4
        ]
    },
    {
        "id": 5,
        "name": "Accounts and Sales Team",
        "users": []
    },
    {
        "id": 6,
        "name": "Support Team",
        "users": []
    }
]

function GroupDisplayer({ group }) {
    const {normalizedContactData} = useSite()

    const filteredContactsArr = group.users.map((user) => normalizedContactData[user]);
    
    return (<div className='pb-3 flex items-center  gap-3'>
        <div>
            <AvatarAlphabet label={group.name[0]} variant={group.id}/>
        </div>
        <div className='flex justify-between items-center grow'>
            <p>{group.name}</p>
            <AvatarGroup usersArr={filteredContactsArr}/>
        </div>
    </div>)
}
GroupDisplayer.propTypes = {
    group: PropTypes.object
}

export function ContactGroup() {
    return (<Card>
        <h1 className='flex justify-between items-center'>Groups({dummyGroup.length}) 
        <Button variant="iconOnly"><Plus /></Button>
        </h1>
        <div className='mt-3'>
            {dummyGroup.map((group) => <GroupDisplayer key={group.id} group={group} />)}
        </div>
    </Card>)
}