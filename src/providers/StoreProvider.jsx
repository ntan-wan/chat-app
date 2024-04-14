import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import siteStore from '@/stores/siteStore'

export function StoreProvider({children}) {
    return (
        <Provider store={siteStore}>
            {children}
        </Provider>
    )
}
StoreProvider.propTypes = {
    children: PropTypes.node
}