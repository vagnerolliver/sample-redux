import axios from 'axios'

const endpoint = 'http://localhost:9000/api/';

export default {
    async get(path) {
        return axios.get(endpoint + path)
    }
}
