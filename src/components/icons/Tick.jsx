import PropTypes from 'prop-types'
import { cn } from "@/lib/utils"
import { cva } from 'class-variance-authority'

const iconStyles = cva(['w-5 h-5'], {
    variants: {
        variant: {
            default: 'text-neutral-400',
            active: 'text-primary'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

export function Tick({variant}) {
    return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn(iconStyles({variant}))}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
    )
}

Tick.propTypes = {
    variant: PropTypes.string
}