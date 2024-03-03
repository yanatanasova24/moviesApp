import axios from "axios";
import {baseURL} from "../constants"

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(request => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjc4ZDgyMmI5YzVjMzRiYzc2YjgzZGRmZTFmNzAwMSIsInN1YiI6IjY1ZGIzMGVmMDViNTQ5MDE3YjE3OGIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CcAX1-T43HdgQDeqvjN7pAwKrpYzVJi1rRgH8d5RFBw';

    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }

    return request
})

export {apiService}