
(function(exports) {

  function Medida(val, tipo) {
      /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */

      if (val && !tipo) {
        var regexp = /([+-]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cfkmi])/i;

        var m = val.match(regexp);

        this.valor = m[1];
        this.tipo = m[2];

      }

      else if (val && tipo){
          this.valor = val;
          this.tipo = tipo;
      }
      /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
      /* ademas de new Medida(45.2, "Km") */
  }

  Medida.prototype.constructor = Medida;

  Medida.prototype.getValue = function() {
      return this.valor;
  }

  Medida.prototype.getType = function() {
      return this.type;
  }

  exports.Medida = Medida

})(this);
