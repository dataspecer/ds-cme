# Semantic model - poznamky

Pred poznamkami k nove navrhnutym tridam musim zminit, ze se mi porad nezda, ze by to mela byt nejaka velka zmena z meho pohledu.

Vidim, ze architektonicky pohled na vec je porad stejny, ve smyslu ze mame adapter/model/... na cteni trid/asociaci/relationshipu/... a vypada to, ze hlavni flow by mela byt ve stylu:

1. musim vedet, co chci
2. musim pro to zjistit IRI
3. pozadam si adapter/model o zdroj s danym IRI
4. dostanu zdroj s danym IRI
5. musim si zjistit, jestli ten zdroj je trida/relationship
   - u relationship musim zjistit, jestli je to asociace/atribut
6. na sousedy se zeptam zase adapteru/modelu, dostanu jejich IRI
7. u toho musim zjistit, jestli jde o atribut/asociaci/...

Model/Adapter v tuhle chvili funguje jako nejaka gateway do databaze/rdf souboru/sparql endpointu. Vsechna logika toho,

- jak se na sebe vazou tridy nejakymi asociacemi,
- jake maji tridy atributy,
- jak se dostat k atributum tridy,
- jestli jakeho je zdroj typu,

tohle vsechno je mimo spravu toho modelu/adapteru a je na vyvojari, aby si tohle zjistil. Vyvojar musi vedet,

_Pro me tahle zmena interfacu nema vlastne zadny prinos._

Bude se muset rozhodnout, jestli byznys logiku bude dodavat resourcum Model/Adapter, nebo jeslti ji budou mit zdroje samy.

Dam nastrely pro oba dva pripady, at si nakoupime cas.

## Logika v Modelu/Adapteru

Tak se mi zdalo, ze fungoval Adapter ve verzi 1.

Rikal jsem si mu o tridy, rikal jsem si mu o okoli dane tridy, veci hledane v datasourcu pro me zarizoval Adapter. Tridy, asociace, atributy byly docela hloupe objekty, spis obalky.

Jo a teda vubec netusim, jak by se tady melo pracovat se zmenama, v prubehu psani na to snad pridju.

### Interfacy

Jeslti by teda sla vsechna logika do Modelu, tak bych si tam chtel videt nejake veci navic.

1. prvne bych rozdelil to, jeslti zdroje modelu muzu nahrat rovnou, nebo je dostanu jako promise. Rad si necham vysvetlit, v cem je pristup `Promise<T> | <T>` lepsi.
2. at mi Model dava rovnou otypovane soubory
3. at mi Model pomuze rict, jestli je resource z nej nebo ne

```ts
// model/model.ts
type ResourceMap = { [iri: string]: Resource | null };

export interface Model {
  getResources(iris: string[]): ResourceMap;
  getResources<T extends Resource>(): T[]; // data se mi muzou vratit vsechna, tak mi dej rovnou treba vsechny tridy, at si je nemusim pretypovavat
  getRelationsOf(iri: string): SemanticModelRelationship[];
  getRelationsOfMultiple(
    iris: string[]
  ): Map<string, SemanticModelRelationship>; // at se usetri volani(?)
  asPromiseModel(): PromiseModel; // kdyby nekdo z nejakeho duvodu chtel pracovat s tim Promise<T>|<T>, tak at ma tu sanci
  isFromModel(iri: string): boolean; // je resource puvodne z tohoto modelu?
}

export interface PromiseModel {
  // to same akorat async
  getResources(iris: string[]): Promise<ResourceMap>;
}
```

Ted teda ty tridy, vztahy a generalizace bych klidne nechal jako jsou navrhnute.

~U typu `Resource` bych tedy pridal i ty veci jako:~

- label,
- description,
- asi dalsi veci, (prinejlepsim) aby to pokrylo ten SEMIC lightweight

**beru zpet, vidim u NamedThing**

```ts
// semantic-model/resrouces.ts
export interface SemanticModelClass extends NamedThing, Resource {
  type: [typeof SEMANTIC_MODEL_CLASS];
  // todo: is it class, enumeration, datatype, code list, ...
}

export interface SemanticModelRelationship extends NamedThing, Resource {
  type: [typeof SEMANTIC_MODEL_RELATIONSHIP];
  ends: SemanticModelRelationshipEnd[]; // **kolik je tech koncu teda moznejch?**
  // todo: is it attribute or association
}

export interface SemanticModelRelationshipEnd extends NamedThing {
  cardinality?: [number, number | null]; // **tady potrebuju vysvetlivku**
  concept: string;
}

export interface SemanticModelGeneralization extends Resource {
  type: [typeof SEMANTIC_MODEL_GENERALIZATION];
  child: string;
  parent: string;
}
```

## Logika v jednotlivych TS tridach

Tohle je varianta, ktera by se mi zdala z hlediska `ds-cme` pristupu mnohem prijemnejsi, mam teda pocit.

Rad bych mel logiku toho, co muzou dane typy delat primo v nich.

Zatim do toho nevidim tak barvite, mozna bude lepsi ten pristup s logikou v Modelu.

### Interfacy

Logika toho, co po zdrojich muzu chtit je v nich.

```ts
// model/model.ts
import {Resource} from "./resource";

type ResourceMap = {[iri: string]: Resource | null};

export interface Model {
    getResources(iris: string[]):ResourceMap;
    getAllResources():ResourceMap;
    isResourceFrom(iriOrReference: string|Resource): boolean;
    getId(): string | uuid; // nebo neco jineho
    getLabel(): LanguageString | string; // nebo neco jineho, at muzu zobrazit
    setLabel(newLabel: string); // kdyby si chtel uzivatel upravit u sebe ve zobrazeni?
    addResource(resource: Resource); // kdyby to nejak spravoval sam ten model.
}

export interface PromiseModel {...} // zas bych rozdelil
```

A tedy jsme u tech trid.

```ts
export interface Resource {
  iri: string;
  type: string[];
  getOriginatingModel(): string | Model; // mozna to mit tady(?)
}
```

1. jestli je vic veci (trida, enumerace, datatype, codelsit,...) udelal bych pro to asi TS tridu

```ts
export interface SemanticModelClass extends NamedThing, Resource {
    type: [typeof SEMANTIC_MODEL_CLASS];
    // todo: is it class, enumeration, datatype, code list, ...
    getRelationships(): SemanticModelRelationship[];
    getRelationshipsOfType<Association|Attribute>(): SemanticModelRelationship[];
    getParents(): SemanticModelClass[];
    getChildren(): SemanticModelClass[];
    getOriginatingModel(): string | Model; // iri, Id, nebo reference, je mi to jedno. Mozna bych to dal rovnou k Resourcu
    addRelationship(rel: SemanticModelRelationship); // tady uz se mi to prestava libit, nevim, jak to hezky udelat s upravami tady
    hasChanged(): boolean; // jeslti se zmenil, pri exportu by se to nejak zpracovalo
}
```

```ts
export interface SemanticModelRelationship extends NamedThing, Resource {
  type: [typeof SEMANTIC_MODEL_RELATIONSHIP];

  ends: SemanticModelRelationshipEnd[];

  // todo: is it attribute or association
}
```

## Otazky

1. jaky by mel pro uzivatele pracujiciho s ds-cme rozdil, pokud jde o tridu, enumeraci, codelist, ...?
2. relationship budou directional?
3. co znamena pole kardinalit u relationshipEndu?
