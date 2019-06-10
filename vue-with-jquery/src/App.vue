<template>
    <div id="app">
        <h1>Vue with jquery demo</h1>
        <h2>
            Original Message:
            <span id="message">{{message}}</span>
        </h2>

        <button v-on:click="changeMessageViaJquery">change message via jquery</button>
        <br>
        <br>
        <button v-on:click="changeMessage">change message via vue</button>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    name: "app",
    components: {},
    data() {
        return {
            message: "안녕하세요 allen입니다"
        };
    },
    mounted: function() {},
    methods: {
        changeMessageViaJquery: function() {
            $("#message").text("jquery message");
        },
        changeMessage: function() {
            this.message = "vue message";
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
