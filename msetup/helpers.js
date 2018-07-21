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
import {should} from 'chai';

import { mount, render, shallow} from 'enzyme';

global.mount = mount;
global.render = render;
global.shallow = shallow;
global.should = should;
global.expect = expect;

chai.use(chaiEnzyme()) 
