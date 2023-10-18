# Diagramming libraries

Je tady jeden blogisek, ktery jsem si prohlidnul pri zkoumani diagramovacich knihoven:
https://modeling-languages.com/javascript-drawing-libraries-diagrams/.

No jako urcite by bylo lepsi, kdybych si nejdriv sepsal ty pozadavky a pak az vyhodnocoval vhodnost knihoven, todo.

Pri dalsim googleni jsem nasel porovnani js knihoven, [tady](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_libraries), to je ale jen pro charting, tak nic :-(.

## Pozadavky

Typove UML diagram trid

- uvnitr krabicky tridy (uzly)
  - nazev tridy
  - atributy
    - jmeno
    - typ
    - kardinalita
  - barvy
  - mozna asociace a atributy
- hrany
  - labely na obou stranach
  - kardinalita na obou stranach
  - label uprostred
  - barvy
- prvotni layout
- moznost presunout krabicky a hrany
- moznost hybat s hranami
- nice-to-have: hrany mezi tridami byt pravouhle, moznost s nimi hybat
- asociace zobrazene jenom jako hrany
- asociace muzou mit skryte hrany, mozna zobrazene u tridy pred natazenim na platno

## JointJS

- hezke featury, jako integrace s Reactem, jsou dostupne v placene verzi
- pamatuju si, ze typovani grafickych komponent nebyla uplne pohodicka
- clovek si musi napsat sam/najit package od komunity pro prijemnejsi praci s Reactem
- vyuzivane na tom tietomalitu, lp-etl, jine projekty
- maji dost tutorialu, dost velka komunita
- todo: daji se vsechny pozadavky udelat touto knihovnou?

## GoJS

- zjevne tam jde delat UML-like editor, maji na to [demicko](https://gojs.net/latest/samples/umlClass.html)
- asi dlouha historie za tou knihovnou, kominuta, hodne [examplu](https://gojs.net/latest/samples/)
- hodne veci reseno pres jQuery, podobne jako u JointJS
- mam pocit, ze kdyz jsem si to zkousel na zacatku, tak to davalo vazne velky watermark, ze jde free verzi, todo: over

## mxGraph

- na tohle bych se jeste podival, pouzivaji to pod diagrams.net
- ma to urdzovany [fork](https://github.com/maxGraph/maxGraph), jsou tam dost aktivni
-

## Apollon

- projekt z TUMnichov [odkaz](https://github.com/ls1intum/Apollon/tree/develop)
- online UML editor
- vykreslovani, manipulaci s canvasem, ... delaji sami primo s svg elementy, nepouzivaji knihovnu treti strany mam pocit

## Dalsi jeste

- [jsplumb](https://jsplumbtoolkit.com/blog)

## Network grafove knihovny

### VisJs

- [odkaz](https://visjs.github.io/vis-network/examples/)
- daji se pouzivat html elementy jako styly pro krabicky
- da se kreslit vic hran mezi krabickami, nijak to neni omezene
- hrany mezi vrcholy se nedaji nijak upravovat, neda se s nimi rozumne hybat, vypada, ze ani nejde je mit jako pravouhle

### React Diagrams

- flow grafy [odkaz](http://projectstorm.cloud/react-diagrams/?path=/story/simple-usage--events-and-listeners)
- takze se daji delat propojky, ale jen z urciteho "portu" do urciteho portu
- prakticky muze byt mnoho hran mezi dvema vrcholy, daji se od sebe odlisovat
- hrany muzou mit popisky, da se s nimi hybat

## Nepouzitelne uz ted

- mermaid.js
  - maji svuj vlasni md-like jazyk [odkaz](https://mermaid.js.org/intro/getting-started.html)
  - neni interaktivni
- beautiful react diagrams [odkaz](https://antonioru.github.io/beautiful-react-diagrams/#/Diagram%20Component)
  - zase jde o flow grafy
- reactFlow

  - flow grafy, asi nepouzitelne, skoda, maji hezkou dokumentaci [odkaz](https://reactflow.dev/docs/examples/edges/simple-floating-edges/)

- todo: AntW
