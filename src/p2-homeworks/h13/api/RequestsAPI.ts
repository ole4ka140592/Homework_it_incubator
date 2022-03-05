import axios from 'axios'


export const requestAPI = {
    requestPost(body: {success: boolean, checkedValue: boolean}) {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", body)
    }
}
