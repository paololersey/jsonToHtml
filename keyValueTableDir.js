angular.module("Json2TableModule").
directive("keyValueTable",
    function () {
        return {
            restrict: 'AE',
            scope:{
                key : '=key',
                value:'=value'
            },
            template: `<div ng-if="checkString(value)">
                          <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{key}}:{{value}}</label>
                       </div>`,
            controller: ['$scope', 'Json2TableService',function ($scope,Json2TableService) {
                $scope.checkString =Json2TableService.checkString;
           
            }],
        }
    });