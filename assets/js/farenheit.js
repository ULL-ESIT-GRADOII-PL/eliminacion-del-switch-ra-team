
(function(exports) {
  function Farenheit(valor) {
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
  Farenheit.prototype.to = function(outputType) {
      switch (outputType.toLowerCase()) {
          case 'c':
              return this.toCelsius() + " Celsius";
          case 'k':
              return this.toKelvin() + " Kelvin";
          default:
              return "Input format is incorrect, please read EXAMPLES below.";
      }
  }
  exports.Farenheit = Farenheit
})(this);
