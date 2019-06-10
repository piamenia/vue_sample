<template>
    <div>
        <h1>플랫폼 개발팀</h1>
        <h3>{{reportMessage}}</h3>
        <Employee v-on:report="reported" v-bind:empName="employeeList[0]"></Employee>
        <br>
        <Employee v-on:report="reported" v-bind:empName="employeeList[1]"></Employee>
        <br>
        <Employee v-on:report="reported" v-bind:empName="employeeList[2]"></Employee>
    </div>
</template>

<script>
import Employee from "./Employee";
export default {
    name: "Team",
    components: {
        Employee
    },
    data() {
        return {
            reportMessage: "",
            employeeList: ["allen.joy", "theo.jung", "neal.caffrey"]
        };
    },
    methods: {
        reported: function(empName) {
            this.reportMessage = `${empName}가 보고함`;
        }
    }
};
</script>

<style>
</style>
