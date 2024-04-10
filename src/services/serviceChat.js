import axios from 'axios'

export async function getChats() {
    const url = 'http://18.143.79.95/api/chatSystem/chat/list'
    const res = await axios.get(url)

    return res;
}

export async function getChatById( key ,userId) {
    const url = `http://18.143.79.95/api/chatSystem/chatByUserId/${userId}`;
    const res = await axios.get(url);

    return res;
}