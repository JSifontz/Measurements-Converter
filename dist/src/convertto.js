"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertTo;
function convertTo(number) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "pd";

  // constants
  var unidad = unit.toLowerCase();
  var kgToPound = 2.20462;
  var poundsToKg = 0.453592;
  var kmToMiles = 0.621371;
  var milesToKm = 1.60934;

  // Converter from Km to pounds by default
  if (unidad == "pound" || unidad == "pound" || unidad == "pd") {
    return number * kgToPound;
  }

  // converting from pounds to kilograms
  else if (unidad == "kg" || unidad == "kilograms" || unidad == "kgs") {
      return number * poundsToKg;
    }

    // converting from kilometers to miles
    else if (unidad == "km" || unidad == "kilometers" || unidad == "kmts") {
        return (number * kmToMiles).toFixed(4);
      }
      // converting from miles to kilometers
      else if (unidad == "m" || unidad == "mil" || unidad == "miles") {
          return number * milesToKm;
        }
        // Converting from Celsius to Fahrenheint
        else if (unidad == "f" || unidad == "fa" || unidad == "fahrenheint") {
            return (number * 1.8 + 32).toFixed(1);
          }
          // Converting from fahrenheint to celsius
          else if (unidad == "c" || unidad == "celsius") {
              return ((number - 32) / 1.8).toFixed(1);
            }
}