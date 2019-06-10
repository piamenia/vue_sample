<template>
    <div>
        <h2>팀 관리</h2>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>팀코드</th>
                    <th>팀명</th>
                    <th>수정</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in departmentList" v-bind:key="dept.deptCode">
                    <td>{{dept.deptCode}}</td>
                    <td>{{dept.name}}</td>
                    <td>
                        <button v-on:click="initEditing(dept)" class="btn btn-sm btn-danger">수정</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div v-if="editingDepartment" class="card-body">
                        <div class="form-group">
                            <label for>팀코드</label>
                            <input
                                v-bind:disabled="formMode !== FormMode.ADD"
                                v-model="editingDepartment.deptCode"
                                type="text"
                                class="form-control"
                            >
                        </div>
                        <div class="form-group">
                            <label for>팀명</label>
                            <input
                                v-model="editingDepartment.name"
                                type="text"
                                class="form-control"
                            >
                        </div>
                        <button
                            v-if="formMode === FormMode.EDIT"
                            v-on:click="editDepartment"
                            class="btn btn-primary"
                        >수정</button>
                        &nbsp;
                        <button
                            v-on:click="cancelEditting"
                            v-if="formMode === FormMode.EDIT"
                            class="btn btn-dark"
                        >취소</button>
                        <button
                            v-if="formMode === FormMode.ADD"
                            v-on:click="addDepartment"
                            class="btn btn-primary"
                        >등록</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

const FormMode = {
    EDIT: "EDIT",
    ADD: "ADD"
};

export default {
    name: "PageTeamManage",
    data() {
        return {
            departmentList: [],
            editingDepartment: undefined,
            formMode: FormMode.ADD,
            FormMode: FormMode
        };
    },
    mounted: function() {
        this._initEditingTeam();
        this._getDepartmentList();
    },
    methods: {
        initEditing: function(department) {
            console.log(department);
            this.editingDepartment = JSON.parse(JSON.stringify(department));
            this.formMode = FormMode.EDIT;
        },
        cancelEditting: function() {
            this._initEditingTeam();
        },
        editDepartment: function() {
            axios
                .patch(`/department/${this.editingDepartment.deptCode}`, null, {
                    params: {
                        name: this.editingDepartment.name
                    }
                })
                .then(() => {
                    alert("수정 되었습니다");
                    this._initEditingTeam();
                    this._getDepartmentList();
                });
        },
        addDepartment: function() {
            axios
                .post("/department", null, {
                    params: {
                        deptCode: this.editingDepartment.deptCode,
                        name: this.editingDepartment.name
                    }
                })
                .then(() => {
                    alert("등록 되었습니다");
                    this._initEditingTeam();
                    this._getDepartmentList();
                });
        },
        _initEditingTeam: function() {
            this.formMode = FormMode.ADD;
            this.editingDepartment = {
                deptCode: "",
                name: ""
            };
        },
        _getDepartmentList: function() {
            axios.get("/department").then(res => {
                this.departmentList = res.data;
            });
        }
    }
};
</script>

<style>
</style>
