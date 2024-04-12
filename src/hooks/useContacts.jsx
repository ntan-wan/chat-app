import {useQuery} from '@tanstack/react-query';
import { getContacts,  getContactById, getGroupList} from '@/services/serviceContact'

export function useContacts() {
    const {data : res, isLoading} = useQuery({queryKey:['getContacts'], queryFn: getContacts})

    return [res?.data, isLoading]
}

export function useGetContactById(userId) {
    const {data : res, isLoading} = useQuery({queryKey:['getContactById', userId], queryFn: getContactById})

    return [res?.data, isLoading]
}

export function useGroupList() {
    const {data : res, isLoading} = useQuery({queryKey:['getGroupList'], queryFn: getGroupList})

    return [res?.data, isLoading]
}