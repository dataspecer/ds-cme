# Lokalni zmeny u slovniku

_Nevim, jak se odted bude rikat CimAdapteru, jestli je to Model, Adapter, nebo neco jineho. V tomto dokumentu volim slovo adapter_.

Vzorova situace, ktera me ted napada je ta, se kterou pracuji uz dele na sve aplikaci.

Mam:

- jeden adapter, ktery je v rdf, je dostupny rovnou
- jeden adapter, ktery je externi, treba slovnik.gov.cz

A chci na nich delat nejake zmeny, tedy spis delat zmeny na kopiich tech resourcu.

Jak na to tak koukam, tak me zatim napadaji dve moznosti, jak pracovat se zmenami. To, jak se zmeny budou prezentovat uzivateli uz je implementacni detail, do toho bych ted nezachazel.

Budto budu trackovat zmeny jako jednotlive operace, nebo budu delat upravy na objektech. Upravy na objektech bych pozdeji musel nejakym mechanismem umet zjistit, tedy si udelat neco jako diff pro kazdy typ toho resourcu.

## Zmeny se budou zaznamenavat jako jednotlive akce

Pro kazdou operaci, kterou uzivatel nad modelem udela, bude vyvolana nova akce. Zobrazovatko by muselo umet ty akce vyhodnocovat a prezentovat uzivateli. Pri exportu aplikacniho profilu stejne bude muset vzniknout nejaky mechanismus, ktery odmaze/prepise upravene koncepty

Plusy:

- akce se daji rozumne navracet zpet
- docela jednoducha implementace

Minusy:

- muze byt hodne objektu, ktere zahlti pamet.
  - bude se muset nejak projit sekvence uprav a sjednotit je dohromady
- bude muset vzniknout mechanismus pro vyhodnoceni toho retezce zmen pro dane tridy

## Adaptery budou schopne prijimat zapis dat

Adapter, kteremu rikam, at mi da tridu, asociaci, ..., bude mit moznost nejen takove resources cist, ale taky je zapisovat. To by fungovalo tak, ze si uzivatel rekne, ze chce upravit treba jmeno, na tride se da zmenit jmeno a trida si tohle pamatuje. V pripade exportu aplikacniho profilu by musel adapter rict vsem tridam, at si zkontrolujou, jestli se na nich neco neupravilo. Taky bude potreba, aby si adapter dokazal trasovat, jeslti dany koncept byl nebo nebyl upraveny. Pokud nebyl, pouziva ze zdrojoveho slovniku, pokud byl, musi se pouzit ta kopie.

Plusy:

- lepsi devExperience, nebudu muset resit zmeny, to se offloaduje do DS modelu. Otazka jestli chceme DS model takhle nafouknout(?)
  - vyvojar je tedy odstinen od toho, ze vubec existuje rozdil mezi lokalne upravenymi a puvodnimi koncepty

Minusy:

- hodne implementace v ds modelu
- potreba mit nejaky mechanismus na trasovani zmen
- vyvojarovi zacne splyvat, jestli pracuje s lokalne upravenymi daty nebo se zdrojovymi daty
