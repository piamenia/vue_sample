<template>
    <div>
        <h2>사원 정보 수정</h2>
        <EmployeeForm
            v-if="editingEmployee && departmentList"
            v-bind:employee="editingEmployee"
            v-bind:departmentList="departmentList"
            v-bind:isEditMode="true"
            v-bind:isAdminMode="true"
            v-on:submit="editEmployee"
        ></EmployeeForm>
    </div>
</template>

<script>
import axios from "axios";
import EmployeeForm from "../../shared/components/EmployeeForm";

export default {
    name: "PageEmployeeEdit",
    components: {
        EmployeeForm
    },
    data() {
        return {
            pageTitle: undefined,
            editingEmployeeId: undefined,
            editingEmployee: undefined,
            departmentList: undefined
        };
    },
    mounted: function() {
        this.editingEmployeeId = this.$route.params.accountId;
        this._getEditingEmployee();
        this._getDepartmentList();
    },
    methods: {
        editEmployee: function(employee) {
            axios
                .patch(`/employee/${employee.accountId}`, null, {
                    params: {
                        name: employee.name,
                        deptCode: employee.department.deptCode
                    }
                })
                .then(() => {
                    alert("수정 되었습니다");
                    this.$store.dispatch(
                        "coreModule/refreshCurrentEmployee",
                        this.$store.state.coreModule.currentEmployee.accountId
                    );
                    this.$router.go(-1);
                });
        },
        _getEditingEmployee: function() {
            axios.get(`/employee/${this.editingEmployeeId}`).then(res => {
                console.log(res.data);
                this.editingEmployee = res.data;
            });
        },
        _getDepartmentList: function() {
            axios.get(`/department`).then(res => {
                this.departmentList = res.data;
            });
        }
    }
};
</script>

<style>
</style>
