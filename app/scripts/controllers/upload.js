'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('UploadCtrl', function ($scope, fileUpload, $routeParams, $http) {

  	$http.get('http://shaastra.org:8001/api/events/' + $routeParams.eventId)
      .then(function (response) {
        console.log(response.data);
        $scope.eventDetails = response.data;
      });

    $scope.uploadFile = function(){
            var file = $scope.myFile;
            console.log('file is ' );
            console.dir(file);
            var uploadUrl = "http://shaastra.org:8080/api/imgs/upload";
            fileUpload.uploadFileToUrl(file, uploadUrl, $routeParams.eventId, $routeParams.teamId);
    };
  });
