<template>
    <div id="#containerBox" class="container-box">
        <slot></slot>
    </div>
</template>


<style scoped>
.container-box {
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.26);
  padding: 25px;
  margin: 2rem start;
}
</style>