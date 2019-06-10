<template>
    <div id="app" class="col-md-10 offset-md-1">
        <!-- <div id="nav">
            <router-link to="/login">Login</router-link>|
            <router-link to="/main">Main</router-link>
        </div>-->
        <h1>User Application</h1>
        <br>
        <router-view/>
    </div>
</template>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 10px;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
