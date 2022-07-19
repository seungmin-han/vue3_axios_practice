import Send from "@/utils/Send.js";

export default {
    name: "Service",
    getToken() {
        return Send({
            url: "/login",
            method: "get",
        });
    },
    read() {
        return Send({
            url: `/api/read`,
            method: "get",
        });
    },
    create(name) {
        return Send({
            url: `/api/create`,
            method: "post",
            data: {
                name: name,
            },
        });
    },
    update(id, name) {
        return Send({
            url: `/api/update`,
            method: "post",
            data: {
                id: id,
                name: name,
            },
        });
    },
    delete(id) {
        return Send({
            url: `/api/delete`,
            method: "post",
            data: {
                id: id,
            },
        });
    },
};
