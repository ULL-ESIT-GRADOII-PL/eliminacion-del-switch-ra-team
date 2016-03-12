
(function(exports) {
      function Meters(valor) {
          Longitud.call(this, valor, "Meters");
      }

      Meters.prototype = new Longitud();
      Meters.prototype.constructor = Meters;

      Meters.prototype.toInches = function() {
          return (this.valor * 39.3701);
      }

      Meters.prototype.to = function(outputType) {
          switch (outputType.toLowerCase()) {
              case 'i':
                  return this.toInches() + " Inches";
              default:
                  return "Input format is incorrect, please read EXAMPLES below.";
          }
      }
      exports.Meters = Meters
})(this);
