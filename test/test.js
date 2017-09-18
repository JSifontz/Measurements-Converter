const expect = require('chai').expect
const convertTo = require('..').default

describe('#convertTo', function() {
  it('The convertion by default is from kilograms to pounds and Pounds can be write as: "pd", "pounds" or "pound"', function(){
    const convert = convertTo(100, "pd")
    expect(convert).to.equal(220.462)
  })
  it('kilograms can be write as: "kg", "kgs" or "kilograms"', function(){
    const convert = convertTo(100, "kg")
    expect(convert).to.equal(45.3592)
  })
  it('kilometers can be write as: "km", "kmts" or "kilometers"', function(){
    const convert = convertTo(100, "kmts")
    expect(convert).to.equal(62.1371)
  })
  it('Miles can be write as: "m", "mil" or "miles"', function(){
    const convert = convertTo(100, "m")
    expect(convert).to.equal(160.934)
  })
  it('Fahrenheint can be write as: "f", "fa" or "fahrenheit"', function(){
    const convert = convertTo(0, "fa")
    expect(convert).to.equal(32.0)
  })
  it('Celsius can be write as: "c" or "celsius"', function(){
    const convert = convertTo(100, "c")
    expect(convert).to.equal(37.8)
  })
})
