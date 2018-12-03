import * as mocha from 'mocha';
import * as THREE from 'three';
import {OrbitControls} from '../src';
import {expect} from 'chai';
import * as jsdom from 'jsdom';

describe('orbit controls', () => {
  let controls: OrbitControls;
  let container: HTMLElement;
  let window: Window;
  beforeEach((done) => {
    const camera = new THREE.PerspectiveCamera(50, 2, 1, 1000);
    window = new jsdom.JSDOM('<html><body><div id="container"></div></body></html>').window
    container = window.document.getElementById( 'container' );
    controls = new OrbitControls(camera, container, window);
    done();
  }); 
  afterEach(() => {
    window.close();
  });

  it('should be ok', () => {
    expect(controls).to.be.an.instanceOf(OrbitControls)
  });
});
