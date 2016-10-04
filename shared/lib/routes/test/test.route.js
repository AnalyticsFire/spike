/*global*/

import RouteBase from '../route.base';

class Test extends RouteBase {

  get route_name(){
    return 'Test';
  }

  get component(){
    return require('shared/components/layouts/test/test.component');
  }

}

export default Test;

