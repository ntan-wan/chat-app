import { useState } from 'react'
import PropTypes from 'prop-types'

import {Card} from '@/components/ui/Card'
import {cn} from '@/lib/utils'
import { ChatNavbar } from '@/components/chat/ChatNavbar'
import { ChatTextArea } from '@/components/chat/ChatTextArea'
import { ChatContent } from '@/components/chat/ChatContent'


export function Chat({personalChat, className}) {
    
    const [filterKeyword, setFilterKeyword] = useState('')


    return <Card id='chats' className={cn('h-full flex flex-col', className)}>
        <ChatNavbar handleFilter={setFilterKeyword}/>
        <ChatContent personalChat={personalChat} filterKeyword={filterKeyword}/>
        <ChatTextArea className='mt-auto'/>
    </Card>
}

Chat.propTypes = {
    personalChat: PropTypes.array,
    className:PropTypes.string
}