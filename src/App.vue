<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Token></Token>
    <Form></Form>
</template>

<script>
import Form from "./components/Form.vue";
import Token from "./components/Token.vue";

export default {
    name: "App",
    components: {
        Form,
        Token,
    },
};
</script>

<style>
* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    width: 600px;
}

button {
    border: 1px solid #ccc;
    background-color: dodgerblue;
    border-radius: 5px;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
}

input {
    padding: 5px;
    margin: 5px;
}
</style>
