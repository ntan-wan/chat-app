import {useQuery} from '@tanstack/react-query';
import { getContacts } from '@/services/serviceContact'

export function useContacts() {
    const {data : res, isLoading} = useQuery({queryKey:['getContacts'], queryFn: getContacts})

    return [res?.data, isLoading]
}