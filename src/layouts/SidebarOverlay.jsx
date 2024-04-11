import PropTypes from 'prop-types'

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { User } from '@/components/icons/User';
import { Building } from '@/components/icons/Building';
import { Gear } from '@/components/icons/Gear';
import { ChatBubble } from '@/components/icons/ChatBubble';
import { Mail } from '@/components/icons/Mail';
import { Calendar } from '@/components/icons/Calendar';
import { Home } from '@/components/icons/Home';


export function SidebarOverlay({ isOpen, toggleDrawer }) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const navItems = [
        { label: 'Home', Icon: Home, handleClick: () => {scrollToTop(); toggleDrawer()} },
        { label: 'Organizations', Icon: Building, handleClick:toggleDrawer},
        { label: 'Mail', Icon: Mail,  handleClick:toggleDrawer },
        { label: 'Chat', Icon: ChatBubble,  handleClick:toggleDrawer },
        { label: 'Calendar', Icon: Calendar,  handleClick:toggleDrawer },
        { label: 'Options', Icon: Gear ,  handleClick:toggleDrawer},
        { label: 'User', Icon: User ,  handleClick:toggleDrawer },
    ]

    return (
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            duration={300}
        >
            <ul className='h-full bg-primary p-3'>
            {navItems.map((item) => <li onClick={() => item.handleClick()} key={item.label} className='c-sidebar-item text-white'>
                <item.Icon className='shrink-0' />
                <p>{item.label}</p>
            </li>)}
        </ul>
        </Drawer>
    )
}

SidebarOverlay.propTypes = {
    isOpen: PropTypes.bool,
    toggleDrawer: PropTypes.func
}