import axios from 'axios'

export async function getChats() {
    const url = 'http://18.143.79.95/api/chatSystem/chat/list'
    const res = await axios.get(url)

    return res;
}

export async function getChatById( userId) {
    const url = `http://18.143.79.95/api/chatSystem/chatByUserId/${userId}`;
    const res = await axios.get(url);

    return res;
}

export async function addChat(data) {
    const url = 'http://18.143.79.95/api/chatSystem/chat/add';
    const payload = {
        fromUser:data.fromUser,
        toUser:data.toUser,
        message:data.message
    }
    const config = {
        headers: {
        "Content-Type" : "application/json",
        }
    }
    const res = await axios.post(url, payload, config)

    return res;
}