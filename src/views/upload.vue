<template>
  <div>
    <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
  </div>
</template>

<script>
import barTop from '../components/barTop.vue'
import card from '../components/card.vue'
import barBottom from '../components/barBottom.vue'

export default {
  components: {
    barTop, card, barBottom
  },
  methods:{

  }
}
</script>

<style>

</style>
