<template>
    <div id="app">
        <h1>Vue component demo</h1>
        <HelloWorld/>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "app",
    components: {
        HelloWorld // import만 한다고해서 사용할수 없음!
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
