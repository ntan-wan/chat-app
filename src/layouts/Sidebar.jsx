import {cn} from '@/lib/utils'
import PropTypes from 'prop-types'


import { User } from '@/components/icons/User';
import { Building } from '@/components/icons/Building';
import { Gear } from '@/components/icons/Gear';
import { ChatBubble } from '@/components/icons/ChatBubble';
import { Mail } from '@/components/icons/Mail';
import { Calendar } from '@/components/icons/Calendar';
import { Home } from '@/components/icons/Home';

export function Sidebar({className}) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const navItems = [
        { label: 'Home', Icon: Home, handleClick: scrollToTop },
        { label: 'Organizations', Icon: Building },
        { label: 'Mail', Icon: Mail },
        { label: 'Chat', Icon: ChatBubble },
        { label: 'Calendar', Icon: Calendar },
        { label: 'Options', Icon: Gear },
        { label: 'User', Icon: User },
    ]

    return <nav className={cn('c-sidebar', className)}>
        <ul>
            {navItems.map((item) => <li onClick={() => item.handleClick()} key={item.label} className='c-sidebar-item text-white'>
                <item.Icon className='shrink-0' />
                <p>{item.label}</p>
            </li>)}
        </ul>
    </nav>
}

Sidebar.propTypes = {
    className:PropTypes.string
}