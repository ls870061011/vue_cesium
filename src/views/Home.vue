<template>
  <div class="main-container">
    <SceneViewer msg="Welcome to this map" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SceneViewer from '@/components/SceneViewer.vue';

@Component({
  name: 'Home',
  components: {
    SceneViewer,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.main-container {
  height: 100%;
}
</style>
