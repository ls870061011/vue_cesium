<template>
  <div id="sceneViewer" class="scene-viewer"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// 引用cesium style
import 'cesium/Build/Cesium/Widgets/widgets.css';
// import { Viewer } from 'cesium';

import Viewer from '@/cesium/SceneViewer';

@Component
export default class SceneViewer extends Vue {
  @Prop() private msg!: string;

  // eslint-disable-next-line class-methods-use-this
  mounted() {
    // eslint-disable-next-line no-new
    const viewer = new Viewer('sceneViewer');
  }
}
</script>

<style scoped lang="scss">
.scene-viewer {
  height: 100%;
}
</style>
