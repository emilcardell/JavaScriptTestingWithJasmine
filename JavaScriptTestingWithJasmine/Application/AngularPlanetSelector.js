angular.module('PlanetSelectorApp', []);

var PlanetSelectorController = function ($scope, $http) {

	$scope.showWarning = false;

	$http.get("/planetCategories").success(function(data) {
		$scope.selectedCategory = data[0];
		$scope.planetCategories = data;

		$http.get("/planetsByCategory/" + $scope.selectedCategory.Id).success(function (dataPlanet) {
			$scope.planets = dataPlanet;
			$scope.selectedPlanet = $scope.planets[0];
		});

	});

	$scope.changeCategory = function () {
		$http.get("/planetsByCategory/" + $scope.selectedCategory.Id).success(function (data) {
			$scope.planets = data;
			$scope.selectedPlanet = $scope.planets[0];
		});
	};

	$scope.changePlanet = function () {
		console.log($scope.selectedPlanet);
		$http.get("/isPlanetZergInfested/" + $scope.selectedPlanet.Id).success(function(data) {
			$scope.showWarning = data.IsZergInfested;
		});
	};


};