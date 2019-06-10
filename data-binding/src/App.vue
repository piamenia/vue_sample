<template>
    <div id="app">
        <h1>Data binding demo</h1>
        <h2>Original message: {{message}}</h2>
        <h3>One way</h3>
        <input v-bind:value="message" type="text">
        <h3>Two way</h3>
        <input v-model="message" type="text">
        <br>
        <button v-on:click="showMessage">입력된 값 확인</button>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            message: "안녕하세요 반갑습니다"
        };
    },
    methods: {
        showMessage: function() {
            alert(this.message);
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
