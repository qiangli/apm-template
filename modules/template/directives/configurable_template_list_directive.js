//
import angular from 'angular';

import configurableTemplateListController from '../controllers/configurable_template_list_controller';

class ConfigurableTemplateListDirective {

  constructor($templateCache) {
    this.restrict='E';
    //this.templateUrl = './modules/template/views/configurable_template_list.html';//
    this.template = $templateCache.get('template/views/configurable_template_list.html');
    this.controller = configurableTemplateListController;
  }

  link(scope, elem, attrs){
        console.log("from list directive");
  }

  static directiveFactory($templateCache) {
    ConfigurableTemplateListDirective.instance = new ConfigurableTemplateListDirective($templateCache);
    return ConfigurableTemplateListDirective.instance;
  }
}

ConfigurableTemplateListDirective.directiveFactory.$inject = ['$templateCache'];

export default angular.module('template.list', [])
    .directive('configurableTemplateList',  ConfigurableTemplateListDirective.directiveFactory);
