
(function(exports) {

  const REGEX = XRegExp('(?<num>      [-+]?[0-9]+(.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*    # number       \n' +
                        '(?<input>    [a-z])[ ]*                                           # inputTemp    \n' +
                        '(?<to>       (?:to)?)[ ]*                                           # to           \n' +
                        '(?<output>   [a-z])[ ]*                                           # outputTemp', 'x' + 'i');


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
  converters['m'] = function (value, type) {
    return Meters.from (value, type);
  }



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


  function evaluate (valor) {
    valor = XRegExp.exec(valor, REGEX);
    return valor;
  }

  function convertir (value) {
    value = evaluate(value);   // Evaluate value using the regular expression
    var result = converters[value.output](value.num, value.input);
    if (!result)
      return -1;
    else
      return result;
  }

  exports.Medida = Medida;
  exports.Medida.convertir = convertir;



})(this);
