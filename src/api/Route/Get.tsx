import { useQuery } from 'react-query';
import useAxios from '../helper/useAxios';

function useGetQuery(Key:string,Api: string) {
  const axios = useAxios();

  return useQuery(Key, async () => {
    const response = await axios.get(Api);
    return response.data; 
  }, {
    onError: (error) => {
      console.error('An error occurred:', error);
    },
    refetchOnWindowFocus: false,
  });
}
export const useGetDynamic =(Key:string , Api:string)=>useGetQuery(Key,Api)

