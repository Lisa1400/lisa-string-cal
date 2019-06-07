describe("String Calculator", function(){
    
    it("should return 0 when an empty string is parsed", function(){
        let result = add("", "");
      expect(result).toBe(0);
    })

    it("should add numbers in a string seperated by a comma", function(){
        let result = add("1, 2");
      expect(result).toBe(3);
    })

    it("should add unknown amount of numbers", function(){
      let result = add("1, 2, 5, 7, 10, 3, 5");
    expect(result).toBe(33);
  })

    it("should handle new lines between numbers", function(){
      let result = add("1, 2, 5\n7, 10, 3\n5");
    expect(result).toBe(33);
  })

  it("should support ; delimeter", function(){
    let result = add("1, 2, 5;7, 10, 3;5");
  expect(result).toBe(33);
})

it("should throw an exception for negative numbers", function(){
  expect(() => { addNegative("-1, 2") }).toThrowError();
})

it("should support multiple delimeters", function(){
  let result = add("1,2;5\n7*10%3\n5");
expect(result).toBe(33);
})
})