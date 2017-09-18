# Convert To

Is a module used to easily know the equivalent of the measurements from kilograms to pounds, kilometers to miles and from degrees celsius to fahrenheit degrees

## Description

- The function take two parameters the first is the value to convert and the second the unit as a string
- The convertion by default is from kilograms to pounds
- Pounds can be write as: "pd", "pounds" or "pound"
- kilograms can be write as: "kg", "kgs" or "kilograms"
- kilometers can be write as: "km", "kmts" or "kilometers"
- Miles can be write as: "m", "mil" or "miles"
- Fahrenheint can be write as: "f", "fa" or "fahrenheit"
- Celsius can be write as: "c" or "celsius"


## Instalation

```
npm install convertto

```

## Use

```
import convertTo from 'convertto'

convertTo(100, "pd")  // 220.462
convertTo(100, "kg")  // 45.3592
convertTo(100, "km")  //62.1371
convertTo(100, "m") // 160.934
convertTo(0, "fa")  // 32.0
convertTo(100, "c") //37.8
```

## Credits

- [Juan Sifontez](https://twitter.com/Jsifontz_)

## License

[MIT](https://opensource.org/licenses/MIT)
