<template>
    <div style="width: 50%; padding: 10px">
        <h3>사원: {{empName}}</h3>
        <button v-on:click="reportToTeam">업무 보고하기</button>
    </div>
</template>

<script>
export default {
    name: "Employee",
    props: ["empName"],
    methods: {
        reportToTeam: function() {
            this.$emit("report", this.empName);
        }
    }
};
</script>

<style scoped>
div {
    border: 1px solid black;
}
</style>
