# Solución a la Práctica Evaluar Analizador Descendente Predictivo Recursivo [![Build Status](https://travis-ci.org/ULL-ESIT-PL-1617/analizador-dpr-erik-jorge-ruben.svg?branchmmaster)](https://travis-ci.org/ULL-ESIT-PL-1617/analizador-dpr-erik-jorge-ruben)

## Alumnos

### Contacto

| Nombre                       | Correo Institucional     | Página Personal                          |
| ---------------------------- | ------------------------ | ---------------------------------------- |
| Jorge Alonso Hernández       | alu0100767803@ull.edu.es | [Jorge](http://alu0100767803.github.io/) |
| Erik Andreas Barreto de Vera | alu0100774054@ull.edu.es | [Erik](https://alu0100774054.github.io/) |
| Rubén Labrador Páez          | alu0100309553@ull.edu.es | [Rubén](https://alu0100309553.github.io/) |



### Perfil

| Nombre                       | Perfil Campus Virtual                    | Perfil Github                            |
| ---------------------------- | ---------------------------------------- | ---------------------------------------- |
| Jorge Alonso Hernández       | [Jorge](https://campusvirtual.ull.es/1617/user/profile.php?id=18914) | [alu0100767803](https://github.com/alu0100767803) |
| Erik Andreas Barreto de Vera | [Erik](https://campusvirtual.ull.es/1617/user/view.php?id=18906&course=1148) | [alu0100774054](https://github.com/alu0100774054) |
| Rubén Labrador Páez          | [Rubén](https://campusvirtual.ull.es/1617/user/view.php?id=9476&course=1148) | [alu0100309553](https://github.com/alu0100309553) |

## Despliegue Heroku 

| Nobre                        | Enlace |
| ---------------------------- | ------ |
| Jorge Alonso Hernández       |        |
| Erik Andreas Barreto de Vera |        |
| Rubén Labrador Páez          |        |

* [Campus PL1617: Práctica: Evaluar Analizador Descendente Predictivo Recursivo](https://campusvirtual.ull.es/1617/mod/assign/view.php?id=195888)
* [Descripción de la Práctica: Analizador Descendente Predictivo Recursivo](http://crguezl.github.io/pl-html/node26.html)
* [Analizadores Descendentes Recursivos](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/parsing/recursivodescendente/)

## Definición de la Práctica

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Descripción del Código de la Práctica

1. [Eloquent JS: The Secret Life of Objects. Lying Out a Table](http://eloquentjavascript.net/06_object.html##h_36C2FHHi44)
2. [Repo original de esta práctica](https://github.com/ULL-ESIT-DSI-1617/oop-eloquentjs-example)

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea.
2. Separe las clases `UnderlinedCell`, `TexCell`, etc. en distintos ficheros exportando los objetos adecuados
3. Reescriba las clases usando ECMA6
4. Añada pruebas para cada una de las clases `UnderlinedCell`, `TexCell`, etc
5. Añada integración continua usando Travis
6. Añada a su `README.md` un badge Travis como este:
[![Build Status](https://travis-ci.org/crguezl/mocha-chai-sinon--example.svg?branch=travis)](https://travis-ci.org/crguezl/mocha-chai-sinon--example)
indicando el estado de las pruebas en Travis y enlazando a las mismas.
7. Entrege los enlaces al repo en GitHub y a Travis


### Recursos

* [Apuntes: Programación Orientada a Objetos](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/oop/)
* [Apuntes: Pruebas. Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Apuntes: Pruebas. Should](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html#shouldl)
* [Apuntes: Integración Contínua. Travis](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/travis.html)
* [node-sass-middleware](https://github.com/sass/node-sass-middleware/blob/master/README.md)


### Gramática

program --> block "EOI".  

block --> ("const" ident "=" numbe (","

ident = number)* ";")?  
          ("var" ident ("," ident) ";")?  
          ("procedure" ident ";" block ";") statement.  


statement --> ident "=" expression  
              | "call" ident  
              | "begin" statement (";" statement)* "end"  
              | "if" condition "then" statement  
              | "while" condition "do" statement .  


condition --> "odd" expression  
              | expression ("="|"#"|"<"|"<="|">"|">=") expression .


expression --> ("+"|"-") expression  
               | term .



term --> ("*"|"/") term  
          | factor .


factor --> ident aux  
          | number aux  
          | "(" expression ")"  


aux -->  ("+"|"-") expression  
        | ("*"|"/") term  

### Ejemplo de código
~~~
var x, squ;

procedure square;
begin
  squ = 1 * 1
end;

begin
  x = 1;
  if a < 10 then b = 5;
  while odd x do
  begin
     call square;
     call squ;
     x = x + ( x * x)
  end
end
~~~
