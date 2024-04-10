import {cn} from '@/lib/utils'
import PropTypes from 'prop-types'

export function Link({children,className}) {
    return (<span className={cn( 'text-primary underline underline-offset-1 cursor-pointer hover:text-indigo-400',className)}>{children}</span>)
}

Link.propTypes = {
    children:PropTypes.node,
    className:PropTypes.string
}