import { queryClient } from "@/providers/ReactQueryProvider";
import { QueryNormalizerProvider } from '@normy/react-query';
import PropTypes from 'prop-types'

export function NormalizerProvider({children}) {
    return (
        <QueryNormalizerProvider queryClient={queryClient}>
            {children}
        </QueryNormalizerProvider>
    )
}

NormalizerProvider.propTypes = {
    children: PropTypes.node
}