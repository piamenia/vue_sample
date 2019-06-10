<template>
    <div>
        <h2>Main Page</h2>
        <br>
        <EmployeeInfo v-on:clickEditBtn="goToMyPage()"></EmployeeInfo>
        <br>
        <h3 class="float-left">팀원 명단</h3>
        <EmployeeList v-bind:isAdminMode="false" v-bind:employeeList="employeeList"></EmployeeList>
    </div>
</template>

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
        this._getEmployeeList();
    },
    methods: {
        goToMyPage: function() {
            this.$router.push(`/my`);
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
 