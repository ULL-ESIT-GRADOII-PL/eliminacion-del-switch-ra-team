
(function(exports) {

  converters = {}
  converters['k'] = function (value) {
    return (value * 1.8) - 459.67;
  }
  converters['c'] = function (value) {
    return (value * 1.8 + 32);
  }
  converters['f'] = function (value) {
    return value;
  }

  function Farenheit(valor) {
    if (converters[type])
        valor = converters[type](valor);
    else {
        valor = Medida.invalidConversion (type, 'Farenheit');
    }
    Temperatura.call(this, valor, "Farenheit");
  }
  // There we set the inheritance
  Farenheit.prototype = new Temperatura();
  Farenheit.prototype.constructor = Farenheit;
  Farenheit.prototype.toCelsius = function() {
      return (this.valor - 32) * 5 / 9;
  }
  Farenheit.prototype.toKelvin = function() {
      return (5 * (this.valor - 32) / 9) + 273.15;
  }

  exports.Farenheit = Farenheit
})(this);
