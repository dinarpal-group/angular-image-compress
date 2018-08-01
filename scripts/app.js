'use strict';

var app = angular.module('angNewsApp', ['ngImageCompress']);

app.controller('demoCtrl', function($scope, toastr) {
	$scope.callToastr = function() {
		toastr.info('call toastr from controller');
	};
});
