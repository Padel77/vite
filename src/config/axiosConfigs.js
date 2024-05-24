import axios from 'axios'


const axiosroot = axios.create({
    baseURL: "https://node-b89g.onrender.com/"
})

export default axiosroot;
