import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PropTypes from 'prop-types'

export const queryClient = new QueryClient()
export function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

ReactQueryProvider.propTypes = {
  children: PropTypes.node
}