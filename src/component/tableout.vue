<template>
  <div class="table-container">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name:"Tableout",
}
</script>

<style scoped>
.table-container{
  width:500px;
}
</style>
