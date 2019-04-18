<template>
  <div class="home">
    <h1>Welcome to this website!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style>
body {
  background-color: gray;
}
</style>