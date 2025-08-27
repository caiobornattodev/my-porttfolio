<template>
  <HeaderNav @change-theme="changeTheme()"></HeaderNav>
  <div class="content">
    <RouterView></RouterView>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';

export default {
  name: 'App',
  data() {
    return {
      darkMode: false
    }
  },
  components: {
    HeaderNav
  },
  methods: {
    changeTheme() {
      this.darkMode = !this.darkMode

      document.body.className = this.darkMode ? 'darkmode' : ''

      console.log('Dark mode: ' + this.darkMode)
    }
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
  height: 130px;
  width: 130px;
  border-radius: 10px;
}

.description {
  margin-left: 30px;
}

a {
  color: dodgerblue;
}

/*Darkmode*/
.darkmode {
  background-color: #352F44;
  color: white;
}

.darkmode header {
  background-color: #5B4B8A;
}

.darkmode .container-box {
  background-color: #5C5470;
}

.darkmode a {
  color: white;
}
</style>
