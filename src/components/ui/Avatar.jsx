
import PropTypes from 'prop-types'
import  { cn } from '@/lib/utils'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import dummyAvatar from '@/assets/imgs/dummyAvatar.png'

export function Avatar({url, className, number}) {

 
    return (<div className={cn('w-14 rounded-full overflow-hidden bg-neutral-200',className)}>

        <LazyLoadImage className={cn("max-w-full", {'hidden': number })}  src={url ? url : dummyAvatar} height={56} width={56}/>
        <p className={cn('h-[38px] flex items-center justify-center',{'hidden' : !number})}>+{number}</p>
        
          {/* <Skeleton className='rounded-full w-14 h-14'/> */}
    </div>)
}

Avatar.propTypes = {
    url: PropTypes.string,
    className:PropTypes.string,
    number:PropTypes.number,
}