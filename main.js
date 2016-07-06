// Framework dependencies
import angular from 'angular';

// Application Modules
import configurableTemplate from './dist/template/module';

let AppModule = angular.module('app', [
    configurableTemplate.name
]);

// Bootstrap our application once all that stuff is loaded
angular.element(document).ready(function() {
  return angular.bootstrap(document.querySelector('#content'), [AppModule.name], {
    strictDi: true // https://docs.angularjs.org/guide/di
  });
});

export default AppModule;
