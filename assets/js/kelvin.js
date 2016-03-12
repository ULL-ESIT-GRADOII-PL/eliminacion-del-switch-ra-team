
(function(exports) {
      function Kelvin(valor) {
          Temperatura.call(this, valor, "Kelvin");

      "use strict";
      converters = {}
      converters['c'] = function (value) {
        return (value + 273.15);
      }
      converters['f'] = function (value) {
        return ((value * 1.8) - 459.67);
      }

      function Kelvin(valor, type) {
          Temperatura.call(this, converters[type](valor), 'k');
      }
      // There we set the inheritance
      Kelvin.prototype = new Temperatura();
      Kelvin.prototype.constructor = Kelvin;
      Kelvin.prototype.toCelsius = function() {
          return (this.valor - 273.15);
      }
      Kelvin.prototype.toFarenheit = function() {
          return ((this.valor * 1.8) - 459.67);
      }

/*      Kelvin.prototype.to = function(outputType) {
          switch (outputType.toLowerCase()) {
              case 'c':
                  return this.toCelsius() + " Celsius";
              case 'f':
                  return this.toFarenheit() + " Farenheit";
              default:
                  return "Input format is incorrect, please read EXAMPLES below.";
          }
      }
*/
      function from (value, inputType) {
        return new Kelvin (converters[inputType](value));
      }



      exports.Kelvin.from = function (value, inputType) {
        return new Kelvin (converters[inputType](value));
      };

      exports.Kelvin.value = this.value;
      exports.Kelvin = Kelvin;

})(this);
