# User stories
// Možná scénáře více specializovat dle oblastí (druhy uživatelské potřeby): tvroba aplikačních profilů, tvorba modelů, úprava existujícího slovníku, ...

## US-01
I just want to create a simple conceptual model of (mammal <- cat, mammal <- dog) so that I can use it in Dataspecer.

## US-02
I have created a data structure in Dataspecer but one of the concepts (from sgov) doesn't align with my needs.
I need to make some modifications to it (like add an attribute).
I expect to see the same vocabularies I used in Dataspecer in the other tool so that I don't need to specify those again.
// Tohle je pro celý DS, přesahuje to VP, tedy spíše přesunout někam jinam.
// Relevantni pro VP: DS (or any other tool) provides the Tool with all relevant context (co editovat, kam to uložit, ...) to edit a vocabulary.

## US-03
I want to be able to modify a concept so that I can use the modified version elsewhere (like DS).
// Subset of US-02, this is the relevant part for VP.

## US-04
I want to have the option to see my concepts in different views so that i can maintain the information while having it easier to visualize.

## US-05
I want to be able to easily undo changes i've done so that i don't have to redo them manually.

## US-06
I want to add a new conceptual model (like wikidata, sgov, ...) to my workspace without having to start over.
// Edituji svůj model, který patchuje sgov. Teď chci přidat něco z wikidat. Wikidata přidám na můj model vedle sgov.

## US-07
I have a hard time tracking which concept is which so i'd like to see concepts from different vocabularies with different colors so that i can distinguish them easily.

## US-08
I have looked up multiple vocabularies and I want to create a subset of their concepts for my own use case.
// Použití slovníků má více způsobů (vše, nějaký filter, ..). Toto je vlastně ta aplikace filtru - je to vlastně tvorba "aplikačního profilu" (bude třeba zadefinovat, zavést slovník?).
// Potenciálně máme 2 způsoby tvorby/vzniku aplikačního profilu, bude specifikováno později.

## US-09
I want to be able to create an application profile from existing vocabularies while being able to:
- select only a couple of concepts I like from one vocabulary
- and remove only a couple of concepts I don't need from another vocabulary.

## US-10
I have an RDF vocabulary and I want to modify it for my own use case.
