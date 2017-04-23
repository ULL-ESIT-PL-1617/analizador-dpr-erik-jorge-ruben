(function() {
  var chai = require('chai');
  var expect = require('chai').expect;
  var should = require('chai').should;
  var assert = require('chai').assert;
  var parser = require('../parser.js');

describe('Main tests.', function() {
    before(function() {
      
    });  
    describe('main()', function() {
      it('variable result existe', function() {
        //expect(m.result).to.exist;
      });
    });
  });

  describe('Parser tests.', function() {
    before(function() {
      var input = "var x, squ; procedure square; begin squ = 1 * 1 end; begin x = 1; if a < 10 then b = 5; while odd x do begin call square; call squ; x = x + ( x * x) end end"
      var result = parser.parse(input);
    });  
    describe('parse()', function() {
      it('El método parse debería devolver un objeto', function() {
        var result = parser.parse('var prueba;');
        expect(result).to.be.an('object');
      });
      it('El método devuelve el objeto correctamente', function() {
        var input = "var x, squ; procedure square; begin squ = 1 * 1 end; begin x = 1; if a < 10 then b = 5; while odd x do begin call square; call squ; x = x + ( x * x) end end"
        var result = parser.parse(input);
        
        expect(parser).itself.to.respondTo("parse");
      
        assert.deepEqual(result, {square: {
           block: {
             statements: {
               statement1: {
                 left: "squ",
                 right: {
                   right: {
                     right: {
                       type: "NUM",
                       value: 1
                     },
                     type: "*"
                   },
                   type: "MULTOP",
                   value: 1,
                 },
                 type: "="
               }
             }
           },
           type: "procedure"
         },
         statements: {
           statement1: {
             left: "x",
             right: {
               type: "NUM",
               value: 1
             },
             type: "="
           },
           statement2: {
             condition: {
               left: {
                 type: "ID",
                 value: "a"
               },
               right: {
                 type: "NUM",
                 value: 10
               },
               type: "<"
             },
             then: {
               left: "b",
               right: {
                 type: "NUM",
                 value: 5
               },
               type: "="
             },
             type: "if"
           },
           statement3: {
             condition: {
               right: {
                 type: "ID",
                 value: "x",
               },
               type: "ODD"
             },
             do: {
               statement1: {
                 right: "square",
                 type: "call"
               },
               statement2: {
                 right: "squ",
                 type: "call"
               },
               statement3: {
                 left: "x",
                 right: {
                   left: "x",
                   right: {
                     right: {
                       right: {
                         right: {
                           type: "ID",
                           value: "x"
                         },
                         type: "*"
                       },
                       type: "MULTOP",
                       value: "x"
                     },
                     type: "+"
                   },
                   type: "ADDOP"
                 },
                 type: "="
               }
             },
             type: "while"
           }
         },
        vars: {
        squ: "null",
        x: "null"
        }});
      });
    });
  });
}).call(this);