<template>
    <div>
        <h1>{{message}}</h1>
        <h3>분으로 표현: {{minute}}분</h3>
        <h3>시간으로 표현: {{hour}}시간</h3>
        <button v-on:click="addThirtyMinute">30분 더하기</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            message: "hello world",
            minute: 180
        };
    },
    computed: {
        hour: function() {
            return this.minute / 60;
        }
    },
    methods: {
        addThirtyMinute: function() {
            this.minute += 30;
        }
    }
};
</script>

<style scoped>
/* h1 {
    color: red;
} */
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
