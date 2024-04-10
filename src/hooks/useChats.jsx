import {useQuery} from '@tanstack/react-query';
import { getChats, getChatById } from '@/services/serviceChat'

export function useChats() {
    const {data : res, isLoading} = useQuery({queryKey:['getChats'], queryFn: getChats})

    return [res?.data, isLoading]
}

export function useChatById(userId) {
    const {data : res, isLoading} = useQuery({queryKey:['getChatById',userId], queryFn: getChatById})

    return [res?.data, isLoading]
}