
(function(exports) {

      converters = {}
      converters['k'] = function (value) {
        return value;
      }
      converters['c'] = function (value) {
        return (value + 273.15);
      }
      converters['f'] = function (value) {
        return ((value * 1.8) - 459.67);
      }

      function Kelvin(valor, type) {
          if (converters[type])
              valor = converters[type](valor);
          else {
              valor = "Invalid conversion: unknown how to convert from '" + type + "' to Kelvin.. See Examples below!"
          }
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


      exports.Kelvin = Kelvin;

})(this);
