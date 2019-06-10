<template>
    <div>
        <table class="table table-hover">
            <thead>
                <th>ID</th>
                <th>사번</th>
                <th>이름</th>
                <th>부서</th>
                <th v-if="isAdminMode">수정</th>
            </thead>
            <tbody>
                <tr v-for="employee in employeeList" v-bind:key="employee.accountId">
                    <td>{{employee.accountId}}</td>
                    <td>사번데이터!</td>
                    <td>{{employee.name}}</td>
                    <td>{{employee.department.name}}</td>
                    <td v-if="isAdminMode">
                        <button
                            v-on:click="listRowClick(employee.accountId)"
                            class="btn btn-sm btn-danger"
                        >수정</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { RoleComponent } from "./mixins/RoleComponent";
export default {
    name: "EmployeeList",
    mixins: [RoleComponent],
    props: ["employeeList"],
    mounted: function() {
        console.log(this.employeeList);
    },
    methods: {
        listRowClick: function(accountId) {
            this.$emit("listRowClick", accountId);
        }
    }
};
</script>

<style>
</style>
