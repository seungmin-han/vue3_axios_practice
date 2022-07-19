import { useListStore } from "@/stores/list";
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4010/",
});

instance.interceptors.request.use(
    function (request) {
        if (request.url != "/login") {
            const store = useListStore();
            if (store.token == "")
                throw new axios.Cancel("토큰이 존재하지 않습니다.");
            else request.headers.token = store.token;
        }

        return request;
    },

    function (error) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {
        return Promise.reject(error);
    },
);

export default instance;
