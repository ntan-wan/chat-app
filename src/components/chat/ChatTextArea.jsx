import { cn } from '@/lib/utils'
import PropTypes from 'prop-types'

import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { AtSymbol } from '@/components/icons/AtSymbol';
import { Emoji } from '@/components/icons/Emoji';
import { Link } from '@/components/icons/Link';
import { Photo } from '@/components/icons/Photo';
import { Aeroplane } from '@/components/icons/Aeroplane';

export function ChatTextArea({ className }) {
    const utils = [
        { label: 'Tag', Icon: AtSymbol },
        { label: 'Emoji', Icon: Emoji },
        { label: 'Link', Icon: Link },
        { label: 'Photo', Icon: Photo },
    ]

    return <div className={cn('border-t p-3 border-neutral-300 flex items-center justify-between gap-4', className)}>
        <Input placeholder="Type a message here.." className='grow' />
        <ul className='flex items-center gap-2'>
            {utils.map((util) => <li key={util.label}>
                <Button variant='iconOnly'>
                    <util.Icon />
                </Button>
            </li>)}
            <li>
                <Button ><Aeroplane /></Button>
            </li>
        </ul>
    </div>
}

ChatTextArea.propTypes = {
    className: PropTypes.string
}