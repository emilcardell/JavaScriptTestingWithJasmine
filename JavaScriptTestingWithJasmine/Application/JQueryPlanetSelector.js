var planetSelectorModule = function (myJquery) {
	var publicModule = {};

	publicModule.IsZergInfested = false;

	publicModule.selectedPlanet = function(planetId) {
		
		myJquery.get("/isPlanetZergInfested/" + planetId, function (isInfestedData) {

			publicModule.IsZergInfested = isInfestedData.IsZergInfested;

		});

	};

	publicModule.LoadPlanetCategories = function () {
		$.get("/planetCategories", function (data) {
			publicModule.Categories = data;
		});

	};

	return publicModule;

};


var planetSelectorView = function(planetSelectorModule) {
	planetSelectorModule.LoadPlanetCategories();

	$.each(planetSelectorModule.Categories, function () {
		options.append($("<option />").val(this.Id).text(this.Name));
	});
	

	
};

$(function () {
	var planetModule = planetSelectorModule(JQuery);

	planetSelectorView(planetModule);


});

//$(function () {
//	$.get("/planetCategories", function (data) {
//		console.log(data);
//		var options = $("#PlanetCategories");
		
//		$.each(data, function () {
//			options.append($("<option />").val(this.Id).text(this.Name));
//		});

//		$.get("/planetsByCategory/" + $('#PlanetCategories').find(":selected").val(), function (planetData) {
//			var optionsPlanets = $("#Planets");
//			$.each(planetData, function () {
//				optionsPlanets.append($("<option />").val(this.Id).text(this.Name));
//			});

//			$('#PlanetInfo h1').text($('#Planets').find(":selected").text());

//			var selectedPlanetId = $('#Planets').find(":selected").val();

//			$.get("/isPlanetZergInfested/" + selectedPlanetId, function (isInfestedData) {

//				var isZergInfested = isInfestedData.IsZergInfested;

//				if (isZergInfested)
//					$('#PlanetInfo .warning').removeClass('hidden');


//			});
//		});
//	});
	
//	$("#PlanetCategories").change(function () {
//		$.get("/planetsByCategory/" + $('#PlanetCategories').find(":selected").val(), function (planetData) {

//			var optionsPlanets = $("#Planets");
//			optionsPlanets.empty();
//			$.each(planetData, function () {
//				optionsPlanets.append($("<option />").val(this.Id).text(this.Name));
//			});

//			$('#PlanetInfo h1').text($('#Planets').find(":selected").text());

//			var selectedPlanetId = $('#Planets').find(":selected").val();

//			$.get("/isPlanetZergInfested/" + selectedPlanetId, function (isInfestedData) {

//				var isZergInfested = isInfestedData.IsZergInfested;

//				if(isZergInfested)
//					$('#PlanetInfo .warning').removeClass('hidden');


//			});

//		});
//	});
	
//	$("#Planets").change(function () {
//			var selectedPlanetId = $('#Planets').find(":selected").val();

//			$.get("/isPlanetZergInfested/" + selectedPlanetId, function (isInfestedData) {

//				var isZergInfested = isInfestedData.IsZergInfested;

//				if(isZergInfested)
//					$('#PlanetInfo .warning').removeClass('hidden');
//				else
//					$('#PlanetInfo .warning').addClass('hidden');

//			});

//	});

//});