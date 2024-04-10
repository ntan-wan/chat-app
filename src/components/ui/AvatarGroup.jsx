import { cn } from '@/lib/utils'
import PropTypes from 'prop-types'

import { Avatar } from '@/components/ui/Avatar'

export function AvatarGroup({ usersArr, className }) {
    const usersLength = usersArr.length

    return (<div className={cn('flex', className)}>
        {
            usersLength ? <>
                <Avatar className='w-10' />
                <Avatar className={cn('w-10 ml-[-20px] z-10', { 'hidden': usersLength <= 1 })} />
                <Avatar className={cn('w-10 ml-[-20px] z-20', { 'hidden': usersLength <= 2 })} number={usersLength - 2} />
            </> : ''
        }
    </div>
    )
}

AvatarGroup.propTypes = {
    className: PropTypes.string,
    usersArr: PropTypes.array
}