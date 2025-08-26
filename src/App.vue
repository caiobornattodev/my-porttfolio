<template>
  <HeaderNav></HeaderNav>
  <div class="content">
    <RouterView></RouterView>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';

export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.ml-5 {
  margin-left: 5px;
}

.mr-5 {
  margin-right: 5px;
}

.mt-15 {
  margin-top: 15px;
}

.content {
  margin: 20px;
  width: auto;
}

.photo {
  display: block;
  margin: auto;
  max-height: 300px;
  border-radius: 200px;
}

.display-flex-start {
  display: flex;
  align-items: flex-start;
}

.logo {
  margin-top: 15px;
  max-height: 130px;
  border-radius: 10px;
}

.description {
  margin-left: 30px;
}
</style>
