<template>
  <div class="item">
    {{ item.name  }}
  </div>
</template>
<script>
  export default {
    name: 'WardrobeListItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>
<style lang="scss">
  .item {
    width: 100%;
    height: 100%;
    display: inline-block;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    border: 1px solid silver;
    box-sizing: border-box;
  }
</style>