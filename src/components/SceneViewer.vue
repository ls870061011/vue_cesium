<template>
  <div id="sceneViewer" class="scene-viewer"></div>
</template>

<script>
import Viewer from '@/cesium/SceneViewer';
// 引用cesium style
require('cesium/Widgets/widgets.css');

export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const viewer = new Viewer('sceneViewer');
  },
};
</script>

<style scoped lang="scss">
.scene-viewer {
  height: 100%;
}
</style>
