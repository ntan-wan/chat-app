import {useQuery} from '@tanstack/react-query';
import { getContacts,  getContactById} from '@/services/serviceContact'

export function useContacts() {
    const {data : res, isLoading} = useQuery({queryKey:['getContacts'], queryFn: getContacts})

    return [res?.data, isLoading]
}

export function useGetContactById(userId) {
    const {data : res, isLoading} = useQuery({queryKey:['getContactById', userId], queryFn: getContactById})

    return [res?.data, isLoading]
}