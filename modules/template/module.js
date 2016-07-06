/**
*/
import angular from 'angular';

import ConfigurableTemplateListDirective from './directives/configurable_template_list_directive';

import ViewsModule from './views';

export default angular.module('template.directives', [ConfigurableTemplateListDirective.name, ViewsModule.name])
    ;
