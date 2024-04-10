import { cva } from "class-variance-authority";
import { cn } from '@/lib/utils'
import PropTypes from 'prop-types'

const buttonStyles = cva(['p-3 rounded-lg transition-colors'], {
    variants: {
        variant: {
            default:'bg-primary text-white',
            plain: 'bg-neutral-100 text-black hover:bg-neutral-200 transition-colors',
            iconOnly: 'bg-transparent hover:bg-neutral-200 tarnsition-colors',
            circle:'rounded-full border border-neutral-500 hover:bg-indigo-100 hover:border-indigo-300'
        }
    },
    defaultVariants: {
        variant:"default"
    }
})

export function Button({ children, variant, className, ...otherProps }) {
    return <button className={cn(buttonStyles({ variant }), className)} {...otherProps}>{children}</button>
}

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string,
    className:PropTypes.string
}