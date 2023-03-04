<template>
  <div class="wardrobe-list">
    <div class="wardrobe-list__block">
      <div 
        class="wardrobe-list__item"
        v-for="item in itemList"
        :key="item.id"
        @click="addSample(item)"
      >
        <WardrobeListItem 
          :item="item"
        />
      </div>
    </div>  
  </div>
</template>
<script>
  import WardrobeListItem from '@/components/WardrobeListItem.vue';
  export default {
    name: "WardrobeList",
    components: {
      WardrobeListItem
    },
    props: {
      itemList: {
        type: Array,
        required: true
      }
    },

    methods: {
      addSample (item) {
        this.$emit('add', item)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wardrobe-list {
    width: 100%;
    border: 3px solid silver;
    min-height: 600px;
    margin-bottom: 100px;

    &__block {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
    }

    &__item {
      width: calc(25% - 20px);
      height: 100px;
      padding: 10px 10px;
    }
  }
</style>