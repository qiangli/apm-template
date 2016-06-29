//
import configurableTemplateListController from '../controllers/configurable_template_list_controller';

var moduleName='template.list';

class ConfigurableTemplateListDirective {

  constructor() {
    this.restrict='E';
    this.templateUrl = './modules/template/views/configurable_template_list.html';
    this.controller = configurableTemplateListController;
  }

  link(scope, elem, attrs){
        console.log("from directive");
  }

  static directiveFactory(){
    ConfigurableTemplateListDirective.instance =new ConfigurableTemplateListDirective();
    return ConfigurableTemplateListDirective.instance;
  }
}

ConfigurableTemplateListDirective.directiveFactory.$inject = [];

angular.module(moduleName, [])
    .directive('configurableTemplateList', ConfigurableTemplateListDirective.directiveFactory);

export default moduleName;
