import { useEffect,  useRef} from 'react';
import { getChatById } from '@/services/serviceChat';
import {useSite} from '@/providers/SiteProvider';
import PropTypes from 'prop-types'
import { formatTime } from '@/lib/utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {cn} from '@/lib/utils'
import { MY_USER_ID } from '@/constants';

import { Avatar } from '@/components/ui/Avatar';

function ChatReply({chat, contact}) {
    return (
        <div className='flex justify-start gap-3 p-3'>
            <div>
                <Avatar url={contact.profileImage}/>
            </div>
            <div>
                <p><b>{contact.username} </b><span className='text-neutral-400 text-sm ml-1'> {formatTime(chat.timestamp)}</span></p>
                <p className='mt-3 bg-white p-3 border border-neutral-300 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow shadow-neutral-300'>
                    {chat.message}
                    {chat.image &&
                        <LazyLoadImage height={100} width={200} className={cn('rounded-lg mt-3')} src={chat.image}/>
                    }
                    </p>
            </div>
        </div>
    )
}
ChatReply.propTypes = {
    chat:PropTypes.object,
    contact:PropTypes.object,
}

function ChatForward({chat, contact}) {
    return (
        <div className='flex justify-end gap-3 p-3'>
            <div >
                <p className='text-right'><b>{contact.username}</b> <span className='text-neutral-400 text-sm ml-1'>{formatTime(chat.timestamp)}</span></p>
                <p className='mt-3 bg-primary p-3  border border-indigo-300 rounded-tl-lg rounded-br-lg rounded-bl-lg shadow text-white shadow-neutral-300'>{chat.message}</p>
            </div>
            <div>
                <Avatar url={contact.profileImage}/>
            </div>
        </div>
    )
}
ChatForward.propTypes = {
    chat:PropTypes.object,
    contact:PropTypes.object,
}

export function ChatContent() {

    const {userId, normalizedContactData, filterKeyword, personalChat, setPersonalChat} = useSite()
    const listRef = useRef(null);
    let filteredChat = [];

    useEffect( () => {
        if (userId) {
            (async () => {
                const res = await getChatById(null, userId);
                setPersonalChat(res.data)
            })()
        }
    }, [userId])

    useEffect(() => {
        listRef.current?.lastElementChild?.scrollIntoView()
    }, [personalChat])


    if (personalChat.length) {
        filteredChat = personalChat.filter((chat) =>chat.message.toLowerCase().includes(filterKeyword.toLowerCase()))
    }

    if (!filteredChat.length) {
        return (
            <p className='text-center text-neutral-400 pt-3'><i>No Chats Found</i></p>
        )
    }

    return (
        <div ref={listRef} className='flex flex-col gap-4 pt-3 overflow-auto c-chat-height' id='chatContainer'>

            {filteredChat.length && filteredChat.map((chat) => {
                if (chat.fromUser === MY_USER_ID) {
                    return <ChatForward key={chat.id} chat={chat} contact={normalizedContactData[chat.fromUser]}/>
                } else  {
                    return <ChatReply key={chat.id} chat={chat} contact={normalizedContactData[chat.fromUser]}/>
                }
            })}
        </div>
    )
}