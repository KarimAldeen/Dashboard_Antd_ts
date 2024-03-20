import { store } from '../Redux/store'
import { Provider } from 'react-redux'
import { Tchildren } from '../types/App'

function ReduxT({ children }: Tchildren) {
  return (
      <Provider store={store}>
    {children}
      </Provider>

  )
}

export default ReduxT