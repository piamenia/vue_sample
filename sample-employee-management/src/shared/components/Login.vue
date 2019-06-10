<template>
    <div>
        <div class="container">
            <div class="row justify-content-center" style="height:100vh">
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group">
                                <label for>ID</label>
                                <input
                                    v-model="username"
                                    v-on:keyup.enter="login()"
                                    type="text"
                                    class="form-control"
                                    name="username"
                                >
                            </div>
                            <button v-on:click="login()" type="button" class="btn btn-primary">login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: ""
        };
    },
    methods: {
        login() {
            this.$emit("login", this.username);
        }
    }
};
</script>

<style>
</style>
