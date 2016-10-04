/*global describe it expect console*/

import TestUtils from 'react-addons-test-utils';
import React from 'react';

import Test from './test.component';

describe('Test component', ()=>{
  it('renders without problems', (done)=>{
      test = TestUtils.renderIntoDocument(React.createElement(Test) );
      expect(test.state).toEqual({});
      done();
  });
});
