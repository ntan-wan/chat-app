import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

const SiteContext = createContext({})

export const useSite = () => useContext(SiteContext);

export function SiteProvider({children}) {
    const [userId, setUserId] = useState(null);
    const [normalizedContactData, setNormalizedContactData] = useState([]);
    const [filterKeyword , setFilterKeyword] = useState('')

    const value = {
        userId,
        setUserId,
        normalizedContactData,
        setNormalizedContactData,
        filterKeyword,
        setFilterKeyword
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