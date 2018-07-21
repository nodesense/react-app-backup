require("babel-core/register");
require("babel-polyfill");

var mockery = require("mockery");

mockery.enable();

var config = { apiEndPoint: '', authEndPoint: '',  };
// We mock 'meteor/meteor' because that's what's imported.
mockery.registerMock('config', config);

//this is for react testing
import raf from './shim';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import chai from 'chai'

import chaiEnzyme from 'chai-enzyme'

import { expect } from 'chai';


chai.use(chaiEnzyme()) 
global.expect = expect;
