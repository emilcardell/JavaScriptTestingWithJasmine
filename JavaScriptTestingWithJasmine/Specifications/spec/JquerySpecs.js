/// <reference path="../../Scripts/jquery-2.0.3.js"/>
/// <reference path="../lib/jasmine-1.3.0/jasmine.js" />
/// <reference path="../../Application/JQueryPlanetSelector.js" />
describe("Planet selector is started (jquery)", function() {

	var planetSelector;
	
	beforeEach(function () {
		var fakeJquery = {};
		fakeJquery.get = function(url, callback) {
			callback({ IsZergInfested: true });
		};
		planetSelector = planetSelectorModule(fakeJquery);
	});

	describe("when a an infested planet is selected", function() {

		beforeEach(function () {
			planetSelector.selectedPlanet(1);
		});

		it("it should show a warning", function() {
			expect(planetSelector.IsZergInfested).toBeTruthy();
		});

	});
	
	describe("when a an not infested planet is selected", function () {

		beforeEach(function () {
			var fakeJquery = {};
			fakeJquery.get = function (url, callback) {
				callback({ IsZergInfested: false });
			};
			planetSelector = planetSelectorModule(fakeJquery);
			
			planetSelector.selectedPlanet(2);
		});

		it("it should NOT show a warning", function () {
			expect(planetSelector.IsZergInfested).toBeFalsy();
		});

	});
});