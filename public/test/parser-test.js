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
  var chai = require('chai');
  var expect = require('chai').expect;
  var should = require('chai').should;
  var assert = require('chai').assert;
  var parser = require('../parser.js');
  
  describe('Parser', function() {  
    describe('parse()', function() {
        it('El método parse debería devolver un objeto', function() {
            var result = parser.parse('var prueba;');
            expect(result).to.be.an('object');
        });
    });
});

}).call(this);