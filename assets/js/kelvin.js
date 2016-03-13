
(function(exports) {

      converters = {}
      converters['c'] = function (value) {
        return (value + 273.15);
      }
      converters['f'] = function (value) {
        return ((value * 1.8) - 459.67);
      }

      function Kelvin(valor, type) {
          if (type != 'k')
              valor = converters[type](valor);
          Temperatura.call(this, valor, 'k');
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
  //    Kelvin.prototype.from = function (value, inputType) {
  //      return new Kelvin (converters[inputType](value));
  //    }

    //  function fromm (value, inputType) {
    //    return new Kelvin (converters[inputType](value));
  //    }


/*
      exports.Kelvin.from = function (value, inputType) {
        return new Kelvin (converters[inputType](value));
      };
*/
    //  exports.Kelvin.value = this.value;
      //exports.Kelvin.fromm = fromm;
      exports.Kelvin = Kelvin;

})(this);
