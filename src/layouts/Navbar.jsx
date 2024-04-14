import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/slices/siteSlice';

import { Link } from "@/components/ui/Link"
import {Button} from '@/components/ui/Button'
import {Menu} from '@/components/icons/Menu'

export function Navbar() {

    const dispatch = useDispatch();

    return (<nav className="p-3 ">
        <h1 className="flex items-center justify-between ">Chat
        <Link className="text-base hidden md:block">Add New Profile</Link>
        <Button  onClick={() => dispatch(toggleSidebar())} variant='iconOnly' className='block md:hidden'>
            <Menu />
        </Button>
        </h1>
    </nav>)
}