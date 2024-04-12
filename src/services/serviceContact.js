import axios from 'axios'

export async function getContacts() {
    const res = await axios.get('http://18.143.79.95/api/chatSystem/users/list')

    return res;
} 

export async function getContactById(key, userId) {
    const res = await axios.get(`http://18.143.79.95/api/chatSystem/user/${userId}`)

    return res;
}

export async function getGroupList(key) {
    const res = await axios.get('http://18.143.79.95/api/chatSystem/groups/list')

    return res;
}

