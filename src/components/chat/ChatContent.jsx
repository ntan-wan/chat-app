import { useEffect,  useRef} from 'react';
import {cn} from '@/lib/utils'
import PropTypes from 'prop-types'
import { MY_USER_ID } from '@/constants';
import { formatTime } from '@/lib/utils';
import {useSite} from '@/providers/SiteProvider';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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


export function ChatContent({personalChat, filterKeyword}) {

    const {normalizedContactData} = useSite()
    const chatListRef = useRef(null);
    let filteredChat = [];


    useEffect(() => {
        chatListRef.current?.lastElementChild?.scrollIntoView()
    }, [personalChat])
    
    if (personalChat?.length) {
        filteredChat = personalChat.filter((chat) =>chat.message.toLowerCase().includes(filterKeyword.toLowerCase()))
    }


    return (
        <div ref={chatListRef} className='flex flex-col gap-4 pt-3 overflow-auto c-chat-height' id='chatContainer'>

            {!personalChat && <p className='text-center text-lg'><i>Loading ...</i></p>}

            {personalChat && !filteredChat.length && 
                <p className='text-center text-neutral-400 pt-3'><i>No Chats Found</i></p>
            }

            {filteredChat.length > 0 && filteredChat.map((chat) => {
                if (chat.fromUser === MY_USER_ID) {
                    return <ChatForward key={chat.id} chat={chat} contact={normalizedContactData[chat.fromUser]}/>
                } else  {
                    return <ChatReply key={chat.id} chat={chat} contact={normalizedContactData[chat.fromUser]}/>
                }
            })}
        </div>
    )
}
ChatContent.propTypes = {
    personalChat: PropTypes.array,
    filterKeyword:PropTypes.string
}