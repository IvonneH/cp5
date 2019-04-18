<template>
  <div id="app">
    <div id="nav">
      <div id="left">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div id="right">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: gray;
}
#nav {
  padding: 30px;
  background-color: white;

}

#nav #left {
  //text-align: left;
  float: left;
}

#nav #right {
  //text-align: right;
  float: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px;
}

#nav a.router-link-exact-active {
  color: green;
}
</style>
