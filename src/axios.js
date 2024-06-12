import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://lhstest.iptime.org', // 여기에 기본 URL을 설정합니다.
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;