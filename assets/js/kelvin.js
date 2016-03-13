
(function(exports) {

      converters = {}
      converters['k'] = function (value) {
        return value;
      }
      converters['c'] = function (value) {
        return (value + 273.15);
      }
      converters['f'] = function (value) {
        return (5 * (this.valor - 32) / 9) + 273.15;
      }

      function Kelvin(valor, type) {
          if (converters[type])
              valor = converters[type](valor);
          else {
              valor = Medida.invalidConversion (type, 'Kelvin');
          }
          Temperatura.call(this, valor, 'Kelvin');
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
