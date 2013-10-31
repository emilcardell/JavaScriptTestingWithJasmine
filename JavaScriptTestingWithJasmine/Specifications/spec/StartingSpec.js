function AddToResult(result, toAdd) {
	result = result + toAdd;
	return result;
}

describe("Staring with result 0", function () {

	var result = 0;

	beforeEach(function () {
		result = 0;
	});

	it("result should have a result of 0", function () {
		expect(result).toEqual(0);
	});

	describe("when 5 is added", function () {

		beforeEach(function () {
			result = AddToResult(result, 5);
		});

		it("result should have a result of 5", function () {
			expect(result).toEqual(5);
		});
		
		describe("when 4 is added", function () {

			beforeEach(function () {
				result = AddToResult(result, 4);
			});

			it("result should have a result of 9", function () {
				expect(result).toEqual(9);
			});

		});

	});
});



function makeMeRunAsyncAndLaggy(funcToRun) {
	setTimeout(funcToRun, 1000);
}


describe("Staring with result 0", function () {

	var result = 0;

	beforeEach(function () {
		result = 0;
	});

	describe("when 5 is added async", function () {

		beforeEach(function () {
			
				makeMeRunAsyncAndLaggy(function () {
					result = AddToResult(result,5);
					console.log(result);
				});
			
				waitsFor(function () {
					return result == 5;
				}, "result never calculated", 5000);
			
		});

		it("result should have a result of 5", function () {
			runs(function() { expect(result).toEqual(5); });
		});
	});
});


var calculator = {
	Result: 0,
	AddToResult: function (toAdd)
	{
		this.Result = this.Result + toAdd;
		return this.Result;
	}
};

describe("Staring a calculator", function () {

	

	describe("when we add something", function () {

		beforeEach(function () {
			spyOn(calculator, 'AddToResult');
			calculator.AddToResult(5);
		});

		it("should have run the AddFunction", function () {
			expect(calculator.AddToResult).toHaveBeenCalled();
		});
	});
});


