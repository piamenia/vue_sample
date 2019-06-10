<template>
    <div>
        <h2>사원 등록</h2>
        <EmployeeForm
            v-if="newEmployee && departmentList"
            v-bind:employee="newEmployee"
            v-bind:departmentList="departmentList"
            v-bind:isEditMode="false"
            v-bind:isAdminMode="true"
            v-on:submit="addEmployee"
        ></EmployeeForm>
    </div>
</template>

<script>
import axios from "axios";
import EmployeeForm from "../../shared/components/EmployeeForm";

export default {
    name: "PageEmployeeAdd",
    data() {
        return {
            newEmployee: undefined,
            departmentList: []
        };
    },
    components: {
        EmployeeForm
    },
    mounted: function() {
        this._getDepartmentList().then(() => {
            this.newEmployee = {
                name: "",
                accountId: "",
                department: this.departmentList[0]
            };
        });
    },
    methods: {
        addEmployee: function(employee) {
            axios
                .post("/employee", null, {
                    params: {
                        accountId: employee.accountId,
                        name: employee.name,
                        deptCode: employee.department.deptCode
                    }
                })
                .then(() => {
                    alert("등록 되었습니다");
                    this.$router.go(-1);
                });
        },
        _getDepartmentList: function() {
            return axios.get(`/department`).then(res => {
                this.departmentList = res.data;
            });
        }
    }
};
</script>

<style>
</style>
