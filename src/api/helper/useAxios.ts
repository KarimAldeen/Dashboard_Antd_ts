import useAuthState from '../../zustand/AuthState'
import { BaseURL } from '../config'
import AxiosBuilder from './AxiosBuilder'

function useAxios() {
  const {isAuthenticated , token}= useAuthState()  
    
  const buildAxios = new AxiosBuilder().
  withBaseURL(BaseURL)
  .withResponseType('json')
  .withTimeout(120000)
  .withHeaders({"Content-Type" :"application/json"})

  
  if(isAuthenticated){

    buildAxios.withHeaders({ Authorization: 'Bearer '+ token })
  } 
  
  return (
    buildAxios.build()
  )
}

export default useAxios