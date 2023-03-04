<template>
  <div class="home">
    <Wardrobe
      v-for="wardrobe in wardrobeList"
      :wardrobe="wardrobe"
      :key="wardrobe.id"
    />
  </div>  
</template>

<script>

import Wardrobe from '@/components/Wardrobe.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Wardrobe
  },

  computed: {
    ...mapGetters({
      wardrobeList: 'getWardrobeList'
    })
  }
}
</script>
<style lang="scss">
  .home {
    display: flex;
  }
</style>
