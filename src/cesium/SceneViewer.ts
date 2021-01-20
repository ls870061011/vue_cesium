/**
 * @module cesium/Viewer
 */

import { Viewer } from 'cesium';

import Config from './Config';

/**
 * @classdesc
 * 场景视图类
 *
 * @api
 */
class SceneViewer extends Viewer {
  options: any;
  /**
   *
   * @param {Object} options
   *
   * @constructor
   * @alias SceneView
   */
  constructor(options: any) {
    super(options);
    Config.viewer = this;
  }
}

export default SceneViewer;
