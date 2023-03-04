<template>
  <div class="wardrobe">
    <WardrobeSample 
      :sample-list="wardrobe.sample"
      :max-sample="wardrobe.max"
      @remove="removeSample"
    />
    <WardrobeList
      :item-list="wardrobe.items"
      @add="addSample"
    />
  </div>
</template>
<script>
  import WardrobeList from '@/components/WardrobeList.vue'
  import WardrobeSample from '@/components/WardrobeSample.vue'
  
  export default {
    name: "Wardrobe",
    components: {
      WardrobeList,
      WardrobeSample
    },

    props: {
      wardrobe: {
        type: Object,
        requried: true
      }
    },

    methods: {
      addSample (item) {
        this.$store.dispatch('addSample', {
          sample: item,
          listId: this.wardrobe.id
        })
      },

      removeSample (item) {
        this.$store.dispatch('removeSample', {
          sample: item,
          listId: this.wardrobe.id
        })
      }
    }
  }
</script>
<style lang="scss">
  .wardrobe {
    width: calc(50% - 20px);
    display: flex;
    flex-direction: column;

    &:nth-child(2n) {
      margin-left: 40px;
      align-items: end;
    }
  }
</style>