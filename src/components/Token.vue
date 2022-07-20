<template>
    <div>
        <input type="text" :value="store.token" disabled />
        <button @click="store.getToken">토큰 발급</button>
    </div>
</template>

<script>
import { useListStore } from "../stores/list";

export default {
    name: "Token",
    setup() {
        const store = useListStore();
        return {
            store,
        };
    },
};
</script>

<style></style>
