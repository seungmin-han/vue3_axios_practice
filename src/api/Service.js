import Send from "@/utils/Send.js";

export default {
    name: "Service"
    , getToken()
    {
        return Send({
            url: '/login'
            , method: 'get'
        })
    }
    , read(token)
    {
        return Send({
            url: `/${token}/read`
            , method: 'get'
        })
    }
    , create(token, name)
    {
        return Send({
            url: `/${token}/create`
            , method: 'post'
            , data: {
                name: name
            }
        })
    }
    , update(token, id, name)
    {
        return Send({
            url: `/${token}/update`
            , method: 'post'
            , data: {
                id: id
                , name: name
            }
        })
    }
    
}