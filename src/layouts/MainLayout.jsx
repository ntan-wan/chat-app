import PropTypes from "prop-types";
import { useSite } from '@/providers/SiteProvider';

import { Navbar } from "@/layouts/Navbar";
import { Sidebar } from "@/layouts/Sidebar";
import { SidebarOverlay } from "@/layouts/SidebarOverlay";

export function MainLayout({ children }) {

    const { sidebarOverlayIsOpen, setSidebarOverlayIsOpen } = useSite();
    const toggle = () => {
        setSidebarOverlayIsOpen((prevState) => !prevState)
    }

    return (
        <div className="c-layout bg-slate-100">
            <Navbar />
            <div className="c-layout-content">
                <Sidebar className='hidden md:block'/>
                <SidebarOverlay isOpen={sidebarOverlayIsOpen} toggleDrawer={toggle} />
                <div className="c-layout-child">
                    {children}
                </div>
            </div>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node
}