import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// https://files.fullstack.edu.vn/f8-tiktok/videos/3624-6669c160c13f5.mp4
// https://tiktok.fullstack.edu.vn/api/users/suggested?per_page=1&page=50
// https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
