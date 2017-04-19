Object.constructor.prototype.error = function(message, t) {
  t = t || this;
  t.name = "SyntaxError";
  t.message = message;
  throw treturn;
};

RegExp.prototype.bexec = function(str) {
  var i, m;
  i = this.lastIndex;
  m = this.exec(str);
  if (m && m.index === i) {
    return m;
  }
  return null;
};

String.prototype.tokens = function() {
  var RESERVED_WORD, from, getTok, i, key, m, make, n, result, rw, tokens, value;
  from = void 0;
  i = 0;
  n = void 0;
  m = void 0;
  result = [];
  tokens = {
    WHITES: /\s+/g,
    ID: /[a-zA-Z_]\w*/g,
    NUM: /\b\d+(\.\d*)?([eE][+-]?\d+)?\b/g,
    STRING: /('(\\.|[^'])*'|"(\\.|[^"])*")/g,
    ONELINECOMMENT: /\/\/.*/g,
    MULTIPLELINECOMMENT: /\/[*](.|\n)*?[*]\//g,
    COMPARISONOPERATOR: /[<>=!]=|[<>]/g,
    ONECHAROPERATORS: /([=()&|;:,{}[\]])/g,
    ADDOP: /[+-]/g,
    MULTOP: /[*\/]/g
  };
  RESERVED_WORD = {
    p: "P",
    "if": "IF",
    then: "THEN",
    procedure: "PROCEDURE",
    "var": "VAR",
    "const":"CONST",
    "begin":"BEGIN",
    "end": "END",
    "call": "CALL",
    "while": "WHILE",
    "do": "DO",
    "odd": "ODD"
  };
  make = function(type, value) {
    return {
      type: type,
      value: value,
      from: from,
      to: i
    };
  };
  getTok = function() {
    var str;
    str = m[0];
    i += str.length;
    return str;
  };
  if (!this) {
    return;
  }
  while (i < this.length) {
    for (key in tokens) {
      value = tokens[key];
      value.lastIndex = i;
    }
    from = i;
    if (m = tokens.WHITES.bexec(this) || (m = tokens.ONELINECOMMENT.bexec(this)) || (m = tokens.MULTIPLELINECOMMENT.bexec(this))) {
      getTok();
    } else if (m = tokens.ID.bexec(this)) {
      rw = RESERVED_WORD[m[0]];
      if (rw) {
        result.push(make(rw, getTok()));
      } else {
        result.push(make("ID", getTok()));
      }
    } else if (m = tokens.NUM.bexec(this)) {
      n = +getTok();
      if (isFinite(n)) {
        result.push(make("NUM", n));
      } else {
        make("NUM", m[0]).error("Bad number");
      }
    } else if (m = tokens.STRING.bexec(this)) {
      result.push(make("STRING", getTok().replace(/^["']|["']$/g, "")));
    } else if (m = tokens.COMPARISONOPERATOR.bexec(this)) {
      result.push(make("COMPARISON", getTok()));
    } else if (m = tokens.ADDOP.bexec(this)) {
      result.push(make("ADDOP", getTok()));
    } else if (m = tokens.MULTOP.bexec(this)) {
      result.push(make("MULTOP", getTok()));
    } else if (m = tokens.ONECHAROPERATORS.bexec(this)) {
      result.push(make(m[0], getTok()));
    } else {
      throw "Syntax error near '" + (this.substr(i)) + "'";
    }
  }
  return result;
};

var parse = function(input) {
  //var condition, expression, factor, lookahead, match, statement, statements, term, tokens, tree;
  var program, block, statement, condition, expression, term, factor, lookahead, match, tokens;
  tokens = input.tokens();
  lookahead = tokens.shift();

  //Equivalente a accept y nextsym
  match = function(t) {
    if (lookahead.type === t) {
      lookahead = tokens.shift();
      if (typeof lookahead === "undefined") {
        lookahead = null;
      }
    } else {
      throw ("Syntax Error. Expected " + t + " found '") + lookahead.value + "' near '" + input.substr(lookahead.from) + "'";
    }
  };

  /**
  expression = function() {
  var result, right, type;
  result = term();
  while (lookahead && lookahead.type === "ADDOP") {
  type = lookahead.value;
  match("ADDOP");
  right = term();
  result = {
  type: type,
  left: result,
  right: right
};
}
return result;
};
term = function() {
var result, right, type;
result = factor();
while (lookahead && lookahead.type === "MULTOP") {
type = lookahead.value;
match("MULTOP");
right = factor();
result = {
type: type,
left: result,
right: right
};
}
return result;
};
factor = function() {
var result;
result = null;
if (lookahead.type === "NUM") {
result = {
type: "NUM",
value: lookahead.value
};
match("NUM");
} else if (lookahead.type === "ID") {
result = {
type: "ID",
value: lookahead.value
};
match("ID");
} else if (lookahead.type === "(") {
match("(");
result = expression();
match(")");
} else {
throw "Syntax Error. Expected number or identifier or '(' but found " + (lookahead ? lookahead.value : "end of input") + " near '" + input.substr(lookahead.from) + "'";
}
return result;
};
*/

factor = function() {
  var result;
  result = null;
  if (lookahead.type === "NUM") {
    result = {
      type: "NUM",
      value: lookahead.value
    };
    match("NUM");
  } else if (lookahead.type === "ID") {
    result = {
      type: "ID",
      value: lookahead.value
    };
    match("ID");
  } else if (lookahead.type === "(") {
    match("(");
    result = expression();
    match(")");
  } else {
    throw "Syntax Error. Expected number or identifier or '(' but found " + (lookahead ? lookahead.value : "end of input") + " near '" + input.substr(lookahead.from) + "'";
  }
  return result;
};

term = function () {
  var result = {};
  if (lookahead.type === "/" || lookahead.type === "*"){
    var operation = lookahead.type;
    match (lookahead.type);
    result = {type: operation, right: term()};
  } else {
    result = {type: "value", right: factor() };
  }
  return result;
}
expression = function () {
  var result = {};
  if (lookahead.type === "+" || lookahead.type === "-"){
    var operation = lookahead.type;
    match (lookahead.type);
    result = {type: operation, right: expression()};
  } else {
    result = {type: "value", right: term() };
  }
  return result;
}

condition = function () {
  var result = {};
  if (lookahead.type === "ODD"){
    match ("ODD");
    result = {type: "ODD", right: expression()};
  } else {
    var left = expression();
    var comp = lookahead.value;
    match ("COMPARISON");
    var right = expression();
    result = {type: comp, left: left, right: right};
  }
  return result;
}

statement = function () {
  var counter = 1;

  var result = {};
  console.log(lookahead.type);
  if ( lookahead.type === "ID") {
    var left = lookahead.value;
    match ("ID");
    match ("=");
    var right = lookahead.value; //Pendiente de implementar expression;
    match ("NUM");
    result = {type: "=", left: left ,right: right };
  } else if (lookahead.type === "BEGIN") {
    match ("BEGIN")
    result ["statement" + counter++] = statement();
    while (lookahead.type === ";"){
      match (";");
      result ["statement" + counter++] = statement();
    }
    match ("END");
  } else if (lookahead.type === "CALL") {
    match ("CALL");
    result = {type: "call", right: lookahead.value }
    match ("ID");
  } else if (lookahead.type === "IF"){
    match ("IF");
    //var cond = condidition();
    var cond = lookahead.value; //pendiente de implementar condición
    match ("ID"); // quitar cuando condition esté implementado
    match ("THEN");
    var th = statement();
    result = {type: "if", condition: cond, then: th};
  } else if (lookahead.type === "WHILE"){
    match ("WHILE");
    //var cond = condidition();
    var cond = lookahead.value; //pendiente de implementar condición
    match ("ID"); // quitar cuando condition esté implementado
    match ("DO");
    var th = statement();
    result = {type: "while", condition: cond, do: th};
  }
  return result;


};

block = function () {
  var result;
  var constantes = {};
  var variables = {};
  result = {};
  if (lookahead.type === "CONST"){
    match ("CONST");
    var name = lookahead.value;
    match ("ID");
    match ("=");
    var valor = lookahead.value;
    match ("NUM");
    constantes[name]= valor;
    while (lookahead.type ===",") {
      match (",")
      var name = lookahead.value;
      match ("ID");
      match ("=");
      var valor = lookahead.value;
      match ("NUM");
      constantes[name]= valor;
    }
    match (";");
    result ["const"] = constantes;
  }
  if (lookahead.type === "VAR"){
    match ("VAR");
    var name = lookahead.value;
    match ("ID");
    variables[name]= "null";
    while (lookahead.type === ",") {
      match (",")
      var name = lookahead.value;
      match ("ID");
      variables[name]= "null";
    }
    match (";");
    result ["vars"] = variables;
  }
  while (lookahead && lookahead.type === "PROCEDURE"){
    match ("PROCEDURE")
    var procName = lookahead.value;
    match ("ID");
    match (";");
    var right = block();
    match (";");
    result [procName] = {type: "procedure", block: right}
  }
  result ["statement"] = statement();
  return result;
}
program = block(input);
// Detectamos si lookahead es null, equivalente a encontrar end of input
if (lookahead != null) {
  throw "Syntax Error parsing statements. " + "Expected 'end of input' and found '" + input.substr(lookahead.from) + "'";
}
return program;
};
