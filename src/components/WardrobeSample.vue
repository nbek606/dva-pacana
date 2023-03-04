<template>
  <div class="wardrobe-sample">

    <div 
      v-if="sampleList.length == 0"
      class="wardrobe-sample__empty"
    >
      Empty
    </div>

    <div 
      class="wardrobe-sample__block"
      v-else
    >
      <div 
        class="wardrobe-sample__item"
        :class="{ 'wardrobe-sample__item__only': maxSample == 1 }"
        v-for="sample in sampleList"
        @click="removeSample(sample)"
      >
        <WardrobeListItem 
          :item="sample"
        />
      </div>
    </div>
   
    <div 
      class="wardrobe-sample__counter"
      v-if="maxSample > 1"
    >
      selected: {{ sampleList.length }} / {{ maxSample }}
    </div>
  </div>
</template>
<script>
  import WardrobeListItem from '@/components/WardrobeListItem.vue';
  export default {
    name: "WardrobeSample",
    components: {
      WardrobeListItem
    },

    props: {
      sampleList: {
        type: Array,
        required: true
      },
      maxSample: {
        type: Number,
        required: true
      }
    },

    methods: {
      removeSample (sample) {
        this.$emit('remove', sample)
      }
    }
  }
</script>
<div lang="scss">
  .wardrobe-sample {
    margin-bottom: 50px;
    width: 300px;
    min-height: 350px;
    border: 1px solid silver;
    padding-bottom: 10px;
    text-align: center;

    &__block {
      display: flex;
      flex-wrap: wrap;
      height: calc(100% - 20px);
      justify-content: center;
    }  

    &__empty {
      width: 100%;
      height: calc(100% - 20px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__item {
      padding: 10px;
      box-sizing: border-box;
      width: 50%;
      height: 100px;

      &__only {
        width: 100%;
        height: 100%;
      }
    }

    &__counter {
      bottom: 0;
      height: 20px;
    }
  
  }
</div>