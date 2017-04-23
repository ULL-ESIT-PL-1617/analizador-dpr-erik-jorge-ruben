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
  
  describe('Parser', function() {  
    describe('parse()', function() {
        it('should return positive value of given negative number', function() {
            expect(Math.abs(-5)).to.be.equal(5);
        });

        it('should return positive value of given positive number', function() {
            expect(Math.abs(3)).to.be.equal(3);
        });

        it('should return 0 given 0', function() {
            expect(Math.abs(0)).to.be.equal(0);
        });
    });
});

}).call(this);