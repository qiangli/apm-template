/**
*/
var moduleName = 'template.directives';

import { default as ConfigurableTemplateListDirective } from './directives/configurable_template_list_directive';

angular.module(moduleName, [ConfigurableTemplateListDirective])
    ;

export default moduleName;
