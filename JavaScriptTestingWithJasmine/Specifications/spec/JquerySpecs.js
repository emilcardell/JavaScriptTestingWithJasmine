describe("Planet selector is started", function() {

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
			expect(player.isPlaying).toBeFalsy();
		});

	});
});