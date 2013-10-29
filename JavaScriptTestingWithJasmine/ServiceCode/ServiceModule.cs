using System;
using System.Collections.Generic;
using Nancy;

namespace JavaScriptTestingWithJasmine.ServiceCode
{
	public class ServiceModule : NancyModule
	{
		private static List<PlanetCategory> planetCategories = new List<PlanetCategory>()
		{
			new PlanetCategory() { Id = "1", Name = "Terran Confederacy worlds‎" },
			new PlanetCategory() { Id = "2", Name = "Moons" },
			new PlanetCategory() { Id = "3", Name = "Zerg worlds" },
		};

		private static Dictionary<string, List<Planet>> planetsByCategoryId = new Dictionary<string, List<Planet>>()
		{
			{ 
				"1", new List<Planet>()
				{
					new Planet() { Id = "1", Name = "Korhal" },
					new Planet() { Id = "2", Name = "Char" },
					new Planet() { Id = "3", Name = "Mar Sara" }
				} 
			},
			{ 
				"2", new List<Planet>()
				{
					new Planet() { Id = "4", Name = "Bel'Shir" },
					new Planet() { Id = "5", Name = "Ulaan" },
					new Planet() { Id = "6", Name = "Saalok " }
				} 
			},
			{ 
				"3", new List<Planet>()
				{
					new Planet() { Id = "7", Name = "Aiur" },
					new Planet() { Id = "8", Name = "Zerus" },
					new Planet() { Id = "9", Name = "Tarsonis " }
				} 
			}
		};


		public ServiceModule()
		{
			Get["/planetCategories"] = _ =>
			{
				return Response.AsJson(planetCategories);
			};

			Get["/planetsByCategory/{categoryId}"] = _ =>
			{
				string categoryId = _.categoryId;
				return Response.AsJson(planetsByCategoryId[categoryId]);
			};

			Get["/isPlanetZergInfested/{planetId}"] = _ => Response.AsJson(new {IsZergInfested = new Random().Next(100)%2 == 0});

			Get["/"] = _ => View["Start.html"];
		}
	}

	public class PlanetCategory
	{
		public string Id { get; set; }
		public string Name { get; set; }
	}

	public class Planet
	{
		public string Id { get; set; }
		public string Name { get; set; }
	}
}