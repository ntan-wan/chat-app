import axios from 'axios'

export async function getContacts() {
    const res = await axios.get('http://18.143.79.95/api/chatSystem/users/list', {
     
    })

    return res;
} 