import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/slices/siteSlice";

import { Navbar } from "@/layouts/Navbar";
import { Sidebar } from "@/layouts/Sidebar";
import { SidebarOverlay } from "@/layouts/SidebarOverlay";

export function MainLayout({ children }) {

    const dispatch = useDispatch()
    const sidebarOverlayIsOpen = useSelector((state) => state.site.sidebarOverlayIsOpen);

    
    return (
        <div className="c-layout bg-slate-100">
            <Navbar />
            <div className="c-layout-content">
                <Sidebar className='hidden md:block'/>
                <SidebarOverlay isOpen={sidebarOverlayIsOpen} toggleDrawer={() => dispatch(toggleSidebar())} />
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