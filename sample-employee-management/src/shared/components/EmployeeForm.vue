<template>
    <div class="container col-md-4">
        <div v-if="editingEmployee" class="card">
            <div class="card-body">
                <div class="form-group">
                    <label for>이름</label>
                    <input v-model="editingEmployee.name" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for>ID</label>
                    <input
                        v-model="editingEmployee.accountId"
                        type="text"
                        class="form-control"
                        v-bind:disabled="isEditMode ? true : false"
                    >
                </div>
                <div class="form-group">
                    <label for>소속 부서</label>
                    <select
                        v-model="editingEmployee.department"
                        class="form-control"
                        v-bind:disabled="isAdminMode ? false : true"
                    >
                        <option
                            v-for="department in departmentList"
                            v-bind:key="department.deptCode"
                            v-bind:value="department"
                        >{{department.name}}</option>
                    </select>
                    <!-- <input v-model="employee.department" type="text" name id class="form-control"> -->
                </div>
                <button class="btn btn-primary" v-on:click="submit()">{{isEditMode ? "수정" : "등록"}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployeeForm",
    props: ["employee", "departmentList", "isAdminMode", "isEditMode"],
    data() {
        return {
            editingEmployee: JSON.parse(JSON.stringify(this.employee))
        };
    },
    mounted: function() {},
    methods: {
        submit: function() {
            this.$emit("submit", this.editingEmployee);
        }
    }
};
</script>

<style>
</style>
