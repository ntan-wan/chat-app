import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

const SiteContext = createContext({
    userId: null,
    setUserId:() => {}
})

export const useSite = () => useContext(SiteContext);

export function SiteProvider({children}) {
    const [userId, setUserId] = useState(null)
    
    const value = {
        userId,
        setUserId
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