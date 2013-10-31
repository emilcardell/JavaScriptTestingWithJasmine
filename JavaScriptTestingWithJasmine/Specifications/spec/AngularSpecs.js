/// <reference path="../../Scripts/jquery-2.0.3.js"/>
/// <reference path="../lib/jasmine-1.3.0/jasmine.js" />
/// <reference path="../../Scripts/angular.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Application/AngularPlanetSelector.js" />
describe("Planet selector is started (Angular)", function () {

	var expectedControllerName = 'PlanetSelectorController';
	var $scope;
	var ppController;
	
	beforeEach(function () {
		angular.mock.module('PlanetSelectorApp');

		angular.mock.inject(function ($rootScope, $controller) {
			$scope = $rootScope.$new();
			ppController = $controller(expectedControllerName, { $scope: $scope });
		});
		
		//angular.mock.inject(function ($location) {
		//	location = $location;
		//});

		//angular.mock.inject(function (parametersFactory) {
		//	factory = parametersFactory;
		//});
	});

	it("should select the fist planet for the first category", function () {
		expect($scope.selectedPlanet).toEqual($scope.planets[0]);
	});

	describe("when a planet is selected", function () {

		beforeEach(function () {
		});

		it("it should show a warning if the planet is zerg infested", function () {
			
		});

	});
});