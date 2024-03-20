import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import useAxios from '../helper/useAxios';

export default function useGetQueryPagination(KEY:string, Api: string , params:any={}) {
  const axios = useAxios();
  const location = useLocation();
  const pagination = location?.search || '';

  return useQuery(
    [KEY, pagination], async () => {
    const response = await axios.get(Api + pagination , {params});
    return response.data; 
  }
 
  );
}

export const useGetDynamicWPagination = (Key :string , Api: string) => useGetQueryPagination(Key,Api);
