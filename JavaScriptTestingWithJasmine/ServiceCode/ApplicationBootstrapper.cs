using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy;
using Nancy.Conventions;

namespace JavaScriptTestingWithJasmine.ServiceCode
{
	public class ApplicationBootstrapper : DefaultNancyBootstrapper
	{
		protected override void ConfigureConventions(NancyConventions conventions)
		{
			base.ConfigureConventions(conventions);

			conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("Application", @"Application"));
			conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("Scripts", @"Scripts"));
			conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("Specifications", @"Specifications"));
		}
	}
}