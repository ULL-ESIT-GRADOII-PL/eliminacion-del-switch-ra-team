
(function(exports) {
      function Inches(valor) {
          Longitud.call(this, valor, "Inches");
      }

      Inches.prototype = new Longitud();
      Inches.prototype.constructor = Inches;

      Inches.prototype.toMeters = function() {
          return (this.valor / 39.3701);
      }

      Inches.prototype.to = function(outputType) {
          switch (outputType.toLowerCase()) {
              case 'm':
                  return this.toMeters() + " Meters";
              default:
                  return "Input format is incorrect, please read EXAMPLES below.";
          }
      }
      exports.Inches = Inches

})(this);
