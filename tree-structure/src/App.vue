<template>
    <div id="app">
        <h1>Tree structure demo</h1>
        <Team/>
    </div>
</template>

<script>
import Team from "./components/Team";

export default {
    name: "app",
    components: {
        Team
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
