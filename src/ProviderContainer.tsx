import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import ReduxT from './lib/ReduxT'
import { Tchildren } from './types/App'
import useResponsive from './Hooks/useResponsive';
import ToastProvider from './lib/ToastProvider';

function ProviderContainer({children}:Tchildren) {


  return (
 <BrowserRouter basename='/'>
        {/* <ReduxT> */}
     <QueryProvider>
        <ToastProvider>
             {children}
        </ToastProvider>
    </QueryProvider>
    {/* </ReduxT> */}
</BrowserRouter>
    )
}

export default ProviderContainer