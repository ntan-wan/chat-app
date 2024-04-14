import {useQuery} from '@tanstack/react-query';
import { getContacts,  getContactById, getGroupList} from '@/services/serviceContact'

export function useContacts() {
    const {data : res, isLoading, isError, isSuccess, isFetching} = useQuery({queryKey:['getContacts'], queryFn: getContacts})

    return {
        contactsData:res?.data,
        isLoading,
        isError,
        isSuccess,
        isFetching
     }
}

export function useGetContactById(userId) {
    const {data : res, isLoading, isError, isSuccess, isFetching} = useQuery({queryKey:['getContactById', userId], queryFn: getContactById})

    return {
        contactData:res?.data,
        isLoading,
        isError,
        isSuccess,
        isFetching
     }
}

export function useGroupList() {
    const {data : res, isLoading, isError, isSuccess, isFetching} = useQuery({queryKey:['getGroupList'], queryFn: getGroupList})

    return {
        groupListData:res?.data,
        isLoading,
        isError,
        isSuccess,
        isFetching
    }
}