describe("Test a Javascript Variable", function(){
	var a = 1;
	var b = 1;
	it("Check Variable is Defined or not", function(){
		expect(typeof a).toBe('number');
	})

	it("Check Variable a is equal to 1", function(){
		expect(a).toEqual(1);
	})

	it("Check Variable a and b values are equal", function(){
		expect(a).toEqual(b);
	})
})