<template>
    <div>
        <h2>Main Page</h2>
        <br>
        <EmployeeInfo v-on:clickEditBtn="goToMyPage"></EmployeeInfo>
        <br>
        <h3 class="float-left">팀원 명단</h3>
        <EmployeeList
            v-if="employeeList"
            v-on:listRowClick="goToEmployeeEdit"
            v-bind:isAdminMode="true"
            v-bind:employeeList="employeeList"
        ></EmployeeList>
        <br>
        <div class="float-left">
            <button v-on:click="goToEmployeeAdd" class="btn btn-primary">팀원 추가</button>
            &nbsp;
            <button v-on:click="goToTeamManage" class="btn btn-dark">팀 관리</button>
        </div>
    </div>
</template>
7
<script>
import axios from "axios";
import { mapState } from "vuex";
import EmployeeInfo from "../../shared/components/EmployeeInfo";
import EmployeeList from "../../shared/components/EmployeeList";

export default {
    name: "PageMain",
    data() {
        return {
            employeeList: undefined
        };
    },
    computed: {
        ...mapState({
            employee: state => state.coreModule.currentEmployee
        })
    },
    components: {
        EmployeeInfo,
        EmployeeList
    },
    mounted: function() {
        this.$store.dispatch(
            "coreModule/getEmployeeList",
            this.employee.department.deptCode
        );
        this._getEmployeeList();
    },
    methods: {
        goToEmployeeAdd: function() {
            this.$router.push(`/edit`);
        },
        goToMyPage: function() {
            this.$router.push(`/my`);
        },
        goToEmployeeEdit: function(accountId) {
            this.$router.push(`/edit/${accountId}`);
        },
        goToTeamManage: function() {
            this.$router.push(`/department`);
        },
        _getEmployeeList: function() {
            axios.get("/employee").then(res => {
                this.employeeList = res.data;
            });
        }
    }
};
</script>

<style>
</style>
 