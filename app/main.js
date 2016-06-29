//
import { default as configurableTemplate } from '../modules/template/module';

//
var moduleName = 'app';


var app = angular.module(moduleName, [configurableTemplate])
  ;

export default moduleName;