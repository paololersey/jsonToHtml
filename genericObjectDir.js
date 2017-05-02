angular.module("Json2TableModule").
directive("genericObject",
    function () {
        return {
            restrict: 'AE',
            scope:{
                key : '=key',
                objectValue:'=objectValue'
            },
            template: `<div ng-if="checkObject(objectValue)" ng-repeat="(key,subValue) in objectValue">
                                         
                          <key-value-table key="key" value="subValue"></key-value-table>                          
                       </div>`,
            controller: ['$scope', 'Json2TableService',function ($scope, Json2TableService) {
                $scope.checkObject =Json2TableService.checkObject;
            }],
        }
    });