describe("Test a Javascript Variable", function(){
	var a = 1;
	it("Check Variable is Defined or not", function(){
		expect(typeof a).toBe('number');
	})

	it("Check Variable a is equal to 1", function(){
		expect(a).toEqual(1);
	})
})