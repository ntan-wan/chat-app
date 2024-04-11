import { useSite } from '@/providers/SiteProvider';


import { Link } from "@/components/ui/Link"
import {Button} from '@/components/ui/Button'
import {Menu} from '@/components/icons/Menu'

export function Navbar() {

    const { setSidebarOverlayIsOpen } = useSite();

    return (<nav className="p-3 ">
        <h1 className="flex items-center justify-between ">Chat
        <Link className="text-base hidden md:block">Add New Profile</Link>
        <Button  onClick={() => setSidebarOverlayIsOpen((prevState) => !prevState)} variant='iconOnly' className='block md:hidden'>
            <Menu />
        </Button>
        </h1>
    </nav>)
}