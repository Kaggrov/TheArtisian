import axios from "axios";

const instance = axios.create({
    baseURL:"" //The Api cloud function url
});

export default instance;