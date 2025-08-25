<template>
  <HeaderNav></HeaderNav>
  <div class="content">
    <div class="display-flex-start">
      <MyProfileCard></MyProfileCard>
      <div class="page">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import MyProfileCard from './components/MyProfileCard.vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
    MyProfileCard
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

.page {
  margin-left: 20px;
  margin-right: auto;
  width: 100%;
}
</style>
