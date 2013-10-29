
describe("Planet selector is started", function () {

	var expectedControllerName = 'PlanetSelectorController';
	var $scope;
	var ppController;
	
	beforeEach(function () {
		angular.mock.module('PlanetSelectorApp');

		angular.mock.inject(function ($rootScope, $controller) {
			$scope = $rootScope.$new();
			ppController = $controller(expectedControllerName, { $scope: $scope });
		});
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