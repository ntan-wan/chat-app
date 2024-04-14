import { useQuery, useMutation } from '@tanstack/react-query';
import { getChats, getChatById, addChat } from '@/services/serviceChat'

export function useChats() {
   const { data: res, isLoading, isError, isSuccess, isFetching } = useQuery({ queryKey: ['getChats'], queryFn: getChats })

   return {
      chatsData: res?.data,
      isLoading,
      isError,
      isSuccess,
      isFetching
   }
}

export function usePostChat() {
   const mutation = useMutation({
      mutationFn: addChat
   })
   function postChat(data) {
      return async () => {
         const payload = {
            fromUser: data.fromUser,
            toUser: data.userId,
            message: data.message,
         };
         const { isIdle, isPending, isError, isSuccess } =  mutation.mutate(payload);

         return {
            isIdle,
            isPending,
            isError,
            isSuccess
         };
      };
   }

   return { postChat };
}

export function useChatById(userId) {

   const { data: res, isLoading, isError, isSuccess, isFetching } = useQuery({ queryKey: ['getChatById2', userId], queryFn: () => getChatById(userId), enabled: !!userId })

   return {
      personalChatData: res?.data,
      isLoading,
      isError,
      isSuccess,
      isFetching
   }

}