import PropTypes from 'prop-types'
import {cn} from '@/lib/utils'
import { cva } from 'class-variance-authority'

const avatarAlphabetStyles = cva(['rounded-lg p-3 w-9 h-9 flex items-center justify-center'],{
    variants: {
        variant: {
            1:'bg-indigo-300',
            2:'bg-amber-300',
            3:'bg-rose-300',
            4:'bg-green-300',
            5:'bg-amber-400',
            6:'bg-cyan-300'
        }
    },
    defaultVariants: {
        variant: 1
    }
})

export function AvatarAlphabet({label, className, variant}) {
    return (<div className={cn(avatarAlphabetStyles({variant}),className)}>
        {label.toUpperCase()}
    </div>)
}

AvatarAlphabet.propTypes = {
    className:PropTypes.string,
    label:PropTypes.string,
    variant: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}