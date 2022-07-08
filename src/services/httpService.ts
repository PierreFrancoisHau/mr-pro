import axios, { AxiosResponse } from "axios";

export async function get(endpoint) {

    return axios
        .get(process.env.VUE_APP_API_URL + endpoint)
}

export async function post(endpoint, datas) {

    type serviceResponse = {
        result: Boolean,
        response: AxiosResponse<any,any>;
    }
    let res : serviceResponse;

    axios
        .post(process.env.VUE_APP_API_URL + endpoint, JSON.stringify(datas))
        .then(function (response) {
            res.result = true;
            res.response = response;
        }).catch(
            function (error) {
                if (error.response) {
                    res.result = error.response.data;
                } else if (error.request) {
                    res.result = error.request;
                } else {
                    res.result = error.message;
                }
            }
        );

    return res;
}
