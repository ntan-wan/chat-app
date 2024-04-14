import PropTypes from 'prop-types';
import {useSite} from '@/hooks/useSite';

import { Card } from '@/components/ui/Card'
import { AvatarAlphabet } from '@/components/ui/AvatarAlphabet'
import { Button } from '@/components/ui/Button'
import {Plus} from '@/components/icons/Plus'
import {AvatarGroup} from '@/components/ui/AvatarGroup'
import {Skeleton} from '@/components/ui/Skeleton'


function GroupDisplayer({ group }) {

    const {normalizedContactData} = useSite()
    const filteredContactsArr = group.users.map((user) => normalizedContactData[user]);

    
    return (<div className='pb-3 flex items-center  gap-3'>
        <div>
            <AvatarAlphabet label={group.name[0]} variant={group.id}/>
        </div>
        <div className='flex justify-between items-center grow'>
            <p className=' truncate text-ellipsis sm:w-96 md:w-20 lg:w-50 xl:w-full'>{group.name}</p>
            <AvatarGroup usersArr={filteredContactsArr}/>
        </div>
    </div>)
}
GroupDisplayer.propTypes = {
    group: PropTypes.object
}


export function ContactGroup({groupList}) {

    const isLoading = !groupList;


    return (<Card className="">
        <h1 className='flex justify-between items-center'>Groups({groupList?.length ?? '0'}) 
        <Button variant="iconOnly"><Plus /></Button>
        </h1>
        <div className='mt-3 overflow-auto max-h-[150px] pr-3'>
            {isLoading &&    <div className="flex flex-col gap-3">
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>}
            {!isLoading && groupList.map((group) => <GroupDisplayer key={group.id} group={group} />)}
        </div>
    </Card>)
}
ContactGroup.propTypes = {
    groupList : PropTypes.array
}