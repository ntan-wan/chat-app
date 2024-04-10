import {cn} from '@/lib/utils'
import PropTypes from 'prop-types'

export function Skeleton({className}) {
    return (
        <div className={cn('animate-pulse p-5 bg-neutral-200 rounded-lg', className)}></div>
    )
} 

Skeleton.propTypes = {
    className:PropTypes.string
}