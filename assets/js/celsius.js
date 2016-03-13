(function(exports) {

  function Celsius(valor) {
      Temperatura.call(this, valor, 'Celsius');
  }

  // There we set the inheritance
  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;

  Celsius.prototype.toFarenheit = function() {
      return (this.valor * 1.8 + 32);
  }

  Celsius.prototype.toKelvin = function() {
      return (this.valor + 273.15);
  }

  Celsius.prototype.to = function(outputType) {
      switch (outputType.toLowerCase()) {
          case 'f':
              return this.toFarenheit() + " Farenheit";
          case 'k':
              return this.toKelvin() + " Kelvin";
          default:
              return "Input format is incorrect, please read EXAMPLES below.";
      }
  }

  exports.Celsius = Celsius;

})(this);
