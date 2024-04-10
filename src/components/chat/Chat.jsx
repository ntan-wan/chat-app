import PropTypes from 'prop-types'

import {Card} from '@/components/ui/Card'
import {cn} from '@/lib/utils'
import { ChatNavbar } from '@/components/chat/ChatNavbar'
import { ChatTextArea } from '@/components/chat/ChatTextArea'
import { ChatContent } from '@/components/chat/ChatContent'


export function Chat({className}) {
    return <Card className={cn('h-full flex flex-col', className)}>
        <ChatNavbar />
        <ChatContent />
        <ChatTextArea className='mt-auto'/>
    </Card>
}

Chat.propTypes = {
    className:PropTypes.string
}