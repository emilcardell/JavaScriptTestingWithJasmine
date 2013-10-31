/// <reference path="../../Scripts/jquery-2.0.3.js"/>
/// <reference path="../lib/jasmine-1.3.0/jasmine.js" />
/// <reference path="../../Application/JQueryPlanetSelector.js" />
describe("Planet selector is started (jquery)", function() {

	var htmlFixture;
	
	beforeEach(function() {
		htmlFixture = $('<select>...</select>');
	});
	
	it("should select the fist planet for the first category", function () {
	});

	describe("when a planet is selected", function() {

		beforeEach(function () {
		});

		it("it should show a warning if the planet is zerg infested", function() {
			expect(false).toBeFalsy();
		});

	});
});