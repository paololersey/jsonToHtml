angular.module("Json2TableModule").
factory('Json2TableService', function () {

    function checkString(obj) {
        if (angular.isString(obj)) return true;
        return false;
    }


    function checkObject(obj) {
        if (angular.isObject(obj) && !angular.isArray(obj)) return true;
        return false;
    }


    function checkArray(obj) {
        if (angular.isArray(obj)) return true;
        return false;
    }

    return {
        checkString: checkString,
        checkObject: checkObject,
        checkArray: checkArray
    }
});