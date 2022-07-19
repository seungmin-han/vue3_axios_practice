import Service from "@/api/Service";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";


export const useListStore = defineStore("saaa", () =>
{
    const token = ref("");
    const id = ref(null);
    const name = ref("");
    const state = reactive(
        {
            list : reactive([]),
        }
    );

    function nameCheck() 
    {
        if(name.value==null || name.value=="") 
        {
            alert("name을 입력하세요.");
            return false;
        }
        return true;
    }

    function idCheck() 
    {
        if(id.value==null || id.value=="") 
        {
            alert("id를 입력하세요.");
            return false;    
        }
        return true;
    }

    function getToken()
    {
        // if (token.value != "")
        // {
        //     alert("토큰은 1회만 발급 가능합니다.");
        //     return;  
        // } 
        Service.getToken()
        .then((res) =>
        {
            token.value = res.data.response.token;
            read();
        })
        .catch((error) =>
        {
            console.log('error', error.response.data.errorMessage);
            warning(error.response);
        })
    }

    function create()
    {   
        if (!nameCheck()) return;
        Service.create(token.value, name.value)
        .then((res) =>
        {
            console.log(res);
            read();
        })
        .catch((error) =>
        {
            console.log('error', error);
            warning(error.response);
        })
    }

    function update()
    {
        if (!nameCheck() || !idCheck()) return;
        Service.update(token.value, id.value, name.value)
        .then((res) =>
        {
            console.log(res);
            read();
        })
        .catch((error) =>
        {
            console.log('error', error);
            warning(error.response);
        })
    }

    function delete_() {
        if (!idCheck()) return;
        Service.delete(token.value, id.value)
        .then((res) =>
        {
            console.log(res);
            read();
        })
        .catch((error) =>
        {
            console.log('error', error);
            warning(error.response);
        })
    }

    function read()
    {
        Service.read(token.value)
        .then((res) =>
        {
            console.log(res);
            console.log("res:", res.data.response);
            console.log("res.status:", res.data.status);
            state.list = res.data.response;
            id.value = "";
            name.value = "";
            if(res.data.status == 1) warning(res);
        })
        .catch((error) =>
        {
            console.log('error', error);
            warning(error.response);
        })
        
    }

    function warning(target)
    {
        alert(target.data.errorMessage); 
    }

    return {
        token
        , id
        , name
        , state
        , getToken
        , create
        , update
        , delete_
        , read
        , warning
    }
})