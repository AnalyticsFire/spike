/*global module*/

import React from 'react';

import template from './test.rt.html';
import SpikeComponent from 'shared/lib/base_classes/spike_component';

class TestComponent extends SpikeComponent {

  get template(){
    return template;
  }

}

TestComponent.propTypes = {

};

module.exports = TestComponent;
