import { useEffect, useRef , useState} from 'react';
import { Avatar } from '@/components/ui/Avatar';
import { getChatById } from '@/services/serviceChat';
import { useChatById } from '@/hooks/useChats';
import {useSite} from '@/providers/SiteProvider';
import PropTypes from 'prop-types'
import { formatTime } from '@/lib/utils';

function ChatReply({chat}) {
    return (
        <div className='flex gap-3 p-3'>
            <div>
                <Avatar />
            </div>
            <div >
                <p><b>Michael Sean </b><span className='text-neutral-400 text-sm ml-1'> {formatTime(chat.timestamp)}</span></p>
                <p className='mt-3 bg-white p-3 border border-neutral-300 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow shadow-neutral-300'>{chat.message}</p>
            </div>
        </div>
    )
}
ChatReply.propTypes = {
    chat:PropTypes.object
}

function ChatForward({chat}) {
    return (
        <div className='flex gap-3 p-3'>
            <div >
                <p className='text-right'><b>Michael Sean</b> <span className='text-neutral-400 text-sm ml-1'>{formatTime(chat.timestamp)}</span></p>
                <p className='mt-3 bg-primary p-3 border border-indigo-300 rounded-tl-lg rounded-br-lg rounded-bl-lg shadow text-white shadow-neutral-300'>{chat.message}</p>
            </div>
            <div>
                <Avatar />
            </div>
        </div>
    )
}
ChatForward.propTypes = {
    chat:PropTypes.object
}

export function ChatContent() {

    const {userId} = useSite()
    const [chats , setChats] = useState([])

    const myUserId = 5;

    useEffect( () => {
        if (userId) {
            (async () => {
                const res = await getChatById(null, userId);
                setChats(res.data)
            })()
        }
    }, [userId])

    // const [chatData, isLoading] = useChatById(userId)
    if (!chats.length) {
        return (
            <p className='text-center text-neutral-400 pt-3'><i>No Chats Found</i></p>
        )
    }

    return (
        <div className='flex flex-col gap-4 pt-3'>

            {chats.length && chats.map((chat) => {
                if (chat.fromUser === myUserId) {
                    return <ChatForward key={chat.id} chat={chat}/>
                } else  {
                    return <ChatReply key={chat.id} chat={chat}/>
                }
            })}
        </div>
    )
}