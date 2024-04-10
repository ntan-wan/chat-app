import PropTypes from 'prop-types'
import {cn} from '@/lib/utils'

export function Card({children, className}) {
    return <div className={cn('bg-white p-4 rounded-lg', className)}>
        {children}
    </div>
}

Card.propTypes = {
    children:PropTypes.node,
    className:PropTypes.string
}

