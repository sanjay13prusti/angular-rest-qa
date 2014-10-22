'use strict'
/*services*/
var qaServices = angular.module('qaServices', []);

qaServices.factory('QAScriptFactory', function ($http) {
    var factory = {};
    factory.getSheetData = function () {
        return $http.get("/ngdemo/rest/qascript");
    };
    factory.postSheetData = function (scriptData) {
        return $http.post("/ngdemo/rest/qascript", scriptData);
    };


    return {
        register: function (user, success, error) {
            //console.log(user.email+" : "+user.username+" : "+user.password);
            $http.post('http://localhost:8086/ngdemo/rest/qascript', user).success(function (res) {
                success();
            }).error(error);
        }
    };

    return factory;
    /*return $resource('/ngdemo/rest/qascript', {});*/

    /*return $resource('/ngdemo/rest/qascript' , {} , {
		post : {
					method : 'POST'
				}	
		});*/
});