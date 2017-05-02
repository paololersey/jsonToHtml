angular.module("Json2TableModule").
controller("Json2TableController", ['$scope', '$compile',
  function ($scope, $compile) {



    var operations = {
      "Generics": [{
        "SubOperationGetEvents": {
          "subOperationName": "event",
          "RegisterAddress": "0083",
          "GetEvents": [{
              "error": "ERR45",
              "Incidence": [{
                  "Sequence": "1",
                  "DR": "dr1",
                  "SPQ": "spq1",
                  "SPA": "spa1",
                  "SPI": "spi1",
                  "Category": "cat1",
                  "EventDescription": "descr 1",
                  "Date": "2017-04-19 18:33"
                },
                {
                  "Sequence": "2",
                  "DR": "dr2",
                  "SPQ": "spq2",
                  "SPA": "spa2",
                  "SPI": "spi2",
                  "Category": "cat2",
                  "EventDescription": "descr 2",
                  "Date": "2017-04-19 18:33"
                },
                {
                  "Sequence": "3",
                  "DR": "dr1",
                  "SPQ": "spq3",
                  "SPA": "spa3",
                  "SPI": "spi3",
                  "Category": "cat3",
                  "EventDescription": "descr 3",
                  "Date": "2017-04-19 18:33"
                }
              ]
            },
            {
              "error": null,
              "Incidence": [{
                "Sequence": "1",
                "DR": "dr4",
                "SPQ": "spq4",
                "SPA": "spa4",
                "SPI": "spi4",
                "Category": "cat4",
                "EventDescription": "descr 4",
                "Date": "2017-04-19 18:33"
              }]
            }
          ]
        }
      }]
    }








    $scope.operations = operations;
    $scope.isNotOpen = true;
    $scope.isNotOpenSubOp = true;
    $scope.status = {};
    $scope.status.open = false;
    $scope.status.openSubOp = false;
    $scope.oneAtATime = true;
    $scope.oneAtATimeSubOp = true;
    $scope.navCollapsed = false;


    $scope.checkString = function (obj) {
      if (angular.isString(obj)) return true;     
      return false;
    }

    $scope.checkArray = function (obj) {
      if (angular.isArray(obj)) return true;
      return false;
    }

    $scope.checkObject = function (obj) {
      if (angular.isObject(obj) && !angular.isArray(obj)) return true;
      return false;
    }



  }
])