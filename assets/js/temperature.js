
(function(exports) {
    "use strict";

    var converters = {}
    converters['k'] = function (value, type) {
      return Kelvin.from (value, type);
    }
    converters['c'] = function (value, type) {
      return Celsius.from (value, type);
    }
    converters['f'] = function (value, type) {
      return Farenheit.from (value, type);
    }

     function Temperatura(valor, tipo) {
        Medida.call(this, valor, tipo);
     }

    // There we set the inheritance
    Temperatura.prototype = new Medida();
    Temperatura.prototype.constructor = Temperatura;

    exports.Temperatura = Temperatura;

})(this);
