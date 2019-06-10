<template>
    <div>
        <h2>내 정보 수정</h2>
        <EmployeeForm
            v-if="editingEmployee && departmentList"
            v-bind:employee="editingEmployee"
            v-bind:departmentList="departmentList"
            v-bind:isEditMode="true"
            v-bind:isAdminMode="false"
            v-on:submit="editEmployee"
        ></EmployeeForm>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import EmployeeForm from "../../shared/components/EmployeeForm";

export default {
    name: "PageMyInfo",
    components: {
        EmployeeForm
    },
    computed: {
        ...mapState({
            editingEmployee: state => state.coreModule.currentEmployee
        })
    },
    data() {
        return {
            departmentList: undefined
        };
    },
    mounted: function() {
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
                        this.editingEmployee.accountId
                    );
                    this.$router.go(-1);
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
