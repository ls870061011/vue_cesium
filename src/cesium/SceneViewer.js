import { Viewer } from 'cesium/Cesium';

import Config from './Config';

/**
 * 场景视图类
 */
class SceneViewer extends Viewer {
  /**
   *
   * @param {Object} options
   *
   * @constructor
   */
  constructor(options) {
    super(options);
    Config.viewer = this;
  }
}

export default SceneViewer;
