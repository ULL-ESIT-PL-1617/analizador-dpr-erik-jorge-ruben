/*(function() {
  var assert;

  assert = chai.assert;

  suite('parser', function() {
    setup(function() {
    });
    test('Numbers are parsed correctly', () => {
      original.value = '4';
      $('button').trigger('click');
      console.log(OUTPUT.innerHTML);
      assert.match(OUTPUT.innerHTML, /"type":\s*"NUM"(.|\n)*"value":\s*4/i);
    });
    test('Multiplications are parsed correctly', () => {
      var result = parse('4*2');
      console.log(result);
      assert.deepEqual(result, {type: "*",
                                left: { type: "NUM", value: 4},
                                right: {type: "NUM", value: 2}
      });
    });
    test('Probando asignación', () => {
      var result = parse('a = 5');
      console.log(result);
      assert.deepEqual(result, {type: "=",
                                left: "a",
                                right: {type: "NUM", value: 5}
      });
    });
    test('Bad expressions throw exceptions', () => {
      assert.throws(() => parse('4 + 2'), /Syntax\s+Error/i);
    });
  });
}).call(this);*/

(function() {
  var assert;
  var expect;
  assert = chai.assert;
  expect = chai.expect;

  suite('parser', function() {
    setup(function() {
    });

    test('Probando que el parser devueva un objeto', () => {
      var result = parse('var a; a = 5');
      console.log(result);
      expect(result).to.be.an('Object');
    });

  

  });

}).call(this);
