/*global describe it expect*/

import { testSharedRouteBehavior } from '../route.base.test';
import { defineRoutes } from '../../routes';
import i18n from 'shared/lib/i18n/i18nFactory.mock';

let route = defineRoutes(i18n).getRoute('Test');

describe('Test route', ()=>{
  testSharedRouteBehavior(route);

  it('detects location', ()=>{
    expect(route.matchesLocation('test')).toBe(true);
    expect(route.matchesLocation('/en/test')).toBe(true);
  });

  it('properly sets params', ()=>{
    let params = route.parseParams({pathname: '/en/test'});
    expect(params).toEqual({locale: 'en'});
  });

  it('can create url from action', ()=>{
    let action = {payload: {}};
    expect(route.url(action, i18n)).toEqual('/en/test');
  })

  it('has a component', ()=>{
    expect(typeof route.component).toEqual('function');
  });

});
