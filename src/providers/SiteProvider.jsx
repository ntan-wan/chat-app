import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

const SiteContext = createContext({
    userId: null,
    setUserId:() => {},
    normalizedContactData : [],
    setNormalizedContactData: () => {}
})

export const useSite = () => useContext(SiteContext);

export function SiteProvider({children}) {
    const [userId, setUserId] = useState(null);
    const [normalizedContactData, setNormalizedContactData] = useState([])
    
    const value = {
        userId,
        setUserId,
        normalizedContactData,
        setNormalizedContactData
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