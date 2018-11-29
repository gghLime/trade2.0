import axios from "axios"
const service = axios.create({
    baseURL: 'http://mock-api.com/Gjz83dK4.mock/'
});
// 请求拦截
service.interceptors.request.use(config => {
	//要加一个cs + " "
    // config.headers['common']['Content-Type'] = 'application/x-www-form-urlencoded';
    // config.headers['x-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9leGFtcGxlLm9yZyIsImF1ZCI6Imh0dHA6XC9cL2V4YW1wbGUuY29tIiwiaWF0IjoxNTQxNDEyNDQ4LCJuYmYiOjE5MDE0MTI0NDgsInVpZCI6MSwiYXV0aGlkIjoiNzEifQ.V2qpfVcSPMQjA68urTH6q9SaFSrhngGHTePou1p8BYU';
    // let token = sessionStorage.getItem('x-token');
    // if (token) {
    //     config.headers['x-token'] = token;
    // }
    return config
});
// 响应拦截
service.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    return Promise.reject(error);
});
export default service