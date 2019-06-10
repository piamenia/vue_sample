<template>
    <div style="text-align:right">
        <h4>현재 사용자</h4>
        <h5>{{employee.accountId}}({{employee.name}}) - {{employee.department.name}}</h5>
        <button v-on:click="clickEditBtn()" class="btn btn-sm btn-primary">정보 수정</button>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "EmployeeInfo",
    computed: mapState({
        employee: state => state.coreModule.currentEmployee
    }),
    methods: {
        clickEditBtn: function() {
            this.$emit("clickEditBtn");
        }
    }
};
</script>

<style>
</style>
