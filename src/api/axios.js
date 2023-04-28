import axios from 'axios';

export default axios.create({
    baseURL: 'postgres://localhost/tododata'
});