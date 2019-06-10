<template>
    <div>
        <h2>Login Page</h2>
        <Login v-on:login="login"></Login>
    </div>
</template>

<script>
import Login from "../../shared/components/Login";

export default {
    name: "PageLogin",
    components: { Login },
    methods: {
        login: function(accountId) {
            this.$store.dispatch("adminLogin", accountId).then(() => {
                this.$router.push({
                    path: "/main"
                });
            });
        }
    }
};
</script>

<style>
</style>
