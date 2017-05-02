angular.module("Json2TableModule").
directive("genericArray",
    function () {
        return {
            restrict: 'AE',
            scope: {
                arrayToCheck: '=arrayToCheck',
                key: '=key'
            },
            template: `<div ng-if="checkArray(arrayToCheck)" ng-repeat="level in arrayToCheck track by $index">
                          <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{key}}</label>
                           
                          <generic-object key="key" object-value="level"></generic-object> 
                                                    
                           <key-value-table key="key" value="arrayToCheck"></key-value-table>
                        </div>`,
            controller: ['$scope', 'Json2TableService', function ($scope, Json2TableService) {
                $scope.checkArray = Json2TableService.checkArray;
            }]
        }
    });