 import axios from 'axios';

 const BASE_URL= 'http://localhost:5000/api';
 const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWIzOWJiYjhiYmIxYTVkMmRkZGY2ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTM3NTAxOSwiZXhwIjoxNjM5NjM0MjE5fQ.xIarm_3rbbjfYXwYKmEwzAMc1iSfQ7wx-Lmgqe69z7w"

export const publicRequest = axios.create({
     baseURL: BASE_URL
    })

 export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
    })