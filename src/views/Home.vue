<template>
  <div class="main-container">
    <SceneViewer/>
  </div>
</template>

<script>
// @ is an alias to /src
import SceneViewer from '@/components/SceneViewer.vue';

export default {
  name: 'Home',
  components: {
    SceneViewer,
  },
};
</script>

<style scoped lang="scss">
.main-container {
  height: 100%;
}
</style>
