//
class ConfigurableTemplateListController {

    constructor($scope) {
        this.init($scope);
    }

    init($scope) {
        $scope.addTemplate = function () {
            $scope.message = '' + new Date();
        };

    }
}

ConfigurableTemplateListController.$inject = ['$scope'];

export default ConfigurableTemplateListController;
