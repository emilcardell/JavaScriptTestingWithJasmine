var planetSelectorModule = function(minEgnaJquery) {
	var publicModule = {};

	publicModule.selectedPlanetWarning = function(planetId) {
		JQuery.get("/isPlanetZergInfested/" + planetId, function (isInfestedData) {

			publicModule.isZergInfested = isInfestedData.IsZergInfested;
		});
	};

	return publicModule;
};

$(function() {
	viewModel(planetSelectorModule(JQuery)).init();
});

planetSelectorModule(myFakeJquery);

var viewModel = function (planetSelectorModule) {
	var publicModule = {}
	var selectedPlanetId = $('#Planets').find(":selected").val();
	planetSelectorModule.selectedPlanetWarning(selectedPlanetId);
};


$(function () {
	$.get("/planetCategories", function (data) {
		console.log(data);
		var options = $("#PlanetCategories");
		
		$.each(data, function () {
			options.append($("<option />").val(this.Id).text(this.Name));
		});

		$.get("/planetsByCategory/" + $('#PlanetCategories').find(":selected").val(), function (planetData) {
			var optionsPlanets = $("#Planets");
			$.each(planetData, function () {
				optionsPlanets.append($("<option />").val(this.Id).text(this.Name));
			});

			$('#PlanetInfo h1').text($('#Planets').find(":selected").text());

			var selectedPlanetId = $('#Planets').find(":selected").val();

			$.get("/isPlanetZergInfested/" + selectedPlanetId, function (isInfestedData) {

				var isZergInfested = isInfestedData.IsZergInfested;

				if (isZergInfested)
					$('#PlanetInfo .warning').removeClass('hidden');


			});
		});
	});
	
	$("#PlanetCategories").change(function () {
		$.get("/planetsByCategory/" + $('#PlanetCategories').find(":selected").val(), function (planetData) {

			var optionsPlanets = $("#Planets");
			optionsPlanets.empty();
			$.each(planetData, function () {
				optionsPlanets.append($("<option />").val(this.Id).text(this.Name));
			});

			$('#PlanetInfo h1').text($('#Planets').find(":selected").text());

			var selectedPlanetId = $('#Planets').find(":selected").val();

			$.get("/isPlanetZergInfested/" + selectedPlanetId, function (isInfestedData) {

				var isZergInfested = isInfestedData.IsZergInfested;

				if(isZergInfested)
					$('#PlanetInfo .warning').removeClass('hidden');


			});

		});
	});
	
	$("#Planets").change(function () {
			var selectedPlanetId = $('#Planets').find(":selected").val();

			$.get("/isPlanetZergInfested/" + selectedPlanetId, function (isInfestedData) {

				var isZergInfested = isInfestedData.IsZergInfested;

				if(isZergInfested)
					$('#PlanetInfo .warning').removeClass('hidden');
				else
					$('#PlanetInfo .warning').addClass('hidden');

			});

	});

});