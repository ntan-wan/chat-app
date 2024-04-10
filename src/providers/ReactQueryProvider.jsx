import {
  QueryClient,
  QueryClientProvider,
  useQueryClient
} from '@tanstack/react-query'
import PropTypes from 'prop-types'

export const queryClient = new QueryClient()

// export const useReactQuery = (key) => {
//   const queryClient = useQueryClient()

//   return queryClient.getQueryData([key])
// }

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