import PropTypes from 'prop-types'
import dummyAvatar from '@/assets/imgs/dummyAvatar.jpg'
import  { cn } from '@/lib/utils'

export function Avatar({url, className, number}) {
    return (<div className={cn('w-14 rounded-full overflow-hidden bg-neutral-200',className)}>
        <img src={url ? url : dummyAvatar} className={cn("max-w-full", {'hidden': number })} alt="avatar"/>
        <p className={cn('h-[38px] flex items-center justify-center',{'hidden' : !number})}>+{number}</p>
    </div>)
}

Avatar.propTypes = {
    url: PropTypes.string,
    className:PropTypes.string,
    number:PropTypes.number,
}