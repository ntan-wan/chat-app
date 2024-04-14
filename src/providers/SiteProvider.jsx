import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const SiteContext = createContext({})
export function SiteProvider({children}) {
    const [userId, setUserId] = useState(null);
    const [normalizedContactData, setNormalizedContactData] = useState([]);
    const [sidebarOverlayIsOpen , setSidebarOverlayIsOpen] = useState(false);
    const [ personalChat, setPersonalChat ] = useState(null);

    const value = {
        userId,
        setUserId,
        normalizedContactData,
        setNormalizedContactData,
        sidebarOverlayIsOpen,
        setSidebarOverlayIsOpen,
        personalChat,
        setPersonalChat
    }

    return(
        <SiteContext.Provider value={value}>
            {children}
        </SiteContext.Provider>
    )
}

SiteProvider.propTypes = {
    children: PropTypes.node
}