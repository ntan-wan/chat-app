import { useState } from 'react'
import { cn } from '@/lib/utils'
import PropTypes from 'prop-types'
import { addChat } from '@/services/serviceChat';
import {useSite} from '@/hooks/useSite';
import { MY_USER_ID } from '@/constants';
import { getChatById } from '@/services/serviceChat';

import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { AtSymbol } from '@/components/icons/AtSymbol';
import { Emoji } from '@/components/icons/Emoji';
import { Link } from '@/components/icons/Link';
import { Photo } from '@/components/icons/Photo';
import { Aeroplane } from '@/components/icons/Aeroplane';

export function ChatTextArea({ className }) {

    const { userId, setPersonalChat } = useSite();
    const [inputValue, setInputValue] = useState('')
    const utils = [
        { label: 'Tag', Icon: AtSymbol },
        { label: 'Emoji', Icon: Emoji },
        { label: 'Link', Icon: Link },
        { label: 'Photo', Icon: Photo },
    ]


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const data = {
            fromUser: MY_USER_ID,
            toUser: userId,
            message: inputValue,
        }
        // mutation.mutate(data)
        await addChat(data);
        const res = await getChatById(null, userId)
        setPersonalChat(res.data)
        setInputValue('')
    }
    const handleOnChange = (inputValue) => {
        setInputValue(inputValue);
    }


    return <form onSubmit={(e) => handleOnSubmit(e)} className={cn('border-t p-3 border-neutral-300 flex  flex-col justify-between gap-4 sm:flex-row sm:items-center', className)}>
        <Input value={inputValue} onChange={(e) => handleOnChange(e.target.value)} placeholder="Type a message here.." className='grow' />
        <ul className='flex items-center justify-end gap-2'>
            {utils.map((util) => <li key={util.label}>
                <Button variant='iconOnly'>
                    <util.Icon />
                </Button>
            </li>)}
            <li>
                <Button type='submit'><Aeroplane /></Button>
            </li>
        </ul>
    </form>
}

ChatTextArea.propTypes = {
    className: PropTypes.string
}