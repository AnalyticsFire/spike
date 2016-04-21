/*global describe it expect*/

import Example from './example';
import ExampleRepo from './example.repository';

import {testSharedExampleRepoBehavior, testSharedExampleBehavior} from './../../../shared/models/example/example.base.test';

describe('client Example entity', ()=>{
  testSharedExampleBehavior(Example);
});

describe('client Example repository', ()=>{
  console.log('ExampleRepo', ExampleRepo)
  testSharedExampleRepoBehavior(ExampleRepo);
});
