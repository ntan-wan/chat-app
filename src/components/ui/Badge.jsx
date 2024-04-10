import { cva } from "class-variance-authority";
import { cn } from '@/lib/utils'
import PropTypes from 'prop-types'

const badgeStyles = cva(['text-xs p-1 h-5 w-5 inline-block flex justify-center items-center'], {
    variants: {
        variant: {
            default: 'bg-red-500 text-white rounded-full'
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

export function Badge({ children, className, variant }) {
    return (
            <span className={cn(badgeStyles({ variant }), className)}>
                {children}
            </span>
    )
}

Badge.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.string,
}