<script lang="ts">

</script>


<template>
  <button class="red">
    <!--  フォールバック-->
    <slot>Click</slot>
  </button>
</template>

<style scoped>
.red {
  background-color: red;
}
</style>
