import PropTypes from "prop-types";

import { Navbar } from "@/layouts/Navbar";
import { Sidebar } from "@/layouts/Sidebar";

export function MainLayout({ children }) {
    return (
        <div className="c-layout bg-slate-100">
            <Navbar />
            <div className="c-layout-content">
                <Sidebar />
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