<template>
    <div>
        <table border="1" align="center" width="300px">
            <tr>
                <th>id</th>
                <th>name</th>
            </tr>
            <tr v-if="store.state.list.length < 1">
                <td colspan="2">데이터가 없습니다.</td>
            </tr>
            <tr v-else v-for="item in store.state.list" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
            </tr>
        </table>
        <div class="formWrap">
            <input type="text" v-model="store.id" placeholder="id" /><br />
            <input type="text" v-model="store.name" placeholder="name" /><br />
            <button @click="store.create">추가</button>
            <button class="update" @click="store.update">수정</button>
            <button class="delete" @click="store.delete_">삭제</button>
        </div>
    </div>
</template>

<script>
import { useListStore } from "../stores/list";
import { ref } from "@vue/reactivity";

export default {
    name: "Form",
    setup() {
        const store = useListStore();
        const id = ref(null);
        const name = ref(null);
        return {
            store,
            id,
            name,
        };
    },
};
</script>

<style>
.update {
    background-color: limegreen;
}

.delete {
    background-color: crimson;
}

.formWrap {
    margin-top: 50px;
}
</style>
