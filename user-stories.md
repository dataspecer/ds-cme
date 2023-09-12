# User stories

<!-- Možná scénáře více specializovat dle oblastí (druhy uživatelské potřeby): tvroba aplikačních profilů, tvorba modelů, úprava existujícího slovníku, ... -->

## US-01 I want to create a simple conceptual model

1. I just want to create a simple conceptual model of (mammal <- cat, mammal <- dog).
2. I want the editor to have an easy way of adding a new concept there, possibly a single click.
3. I want the editor to have an easy way of adding a relation between two concepts.
4. I want to visualize my concepts in the editor so that i can see the relations between them clearly.
5. I want to be able to download the model afterwards in some standard-ish format.

## US-02 I have a conceptual model and i want to modify it

1. I want to be able to upload my conceptual model (in .rdf?) to the editor.
2. I expect to see all my concepts right away somewhere in the editor.
3. My model is pretty large, I want to be able to work only with a subset of it while having the whole model ready.
4. I want the editor to have an easy way of adding/removing concepts and relations.
5. I want to be able to undo a change when I do something wrong.
6. It'd be nice to have the ability to get a change log from the editor.

## US-03 I want to create an application profile from a conceptual model

1. I have an RDF vocabulary and I want to modify it for my own use case.
2. I want to be able to create an application profile from existing vocabularies while being able to:
   - select only a couple of concepts I like from one vocabulary
   - and remove only a couple of concepts I don't need from another vocabulary.
3. I have a hard time tracking which concept is from which vocabulary so I'd like to see concepts from different vocabularies with different colors so that i can distinguish them easily.
4. I want to be able to make some concepts or relations from my source vocabularies mandatory/optional/excluded (see [dcat-ap](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#specterminology))
5. I want to be able to specify ranges for relationships (see [dcat-ap](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#scope-of-the-application-profile)).
6. I want to be able to add a vocabulary to my workspace and use a concept from there.
7. I'd like to be able to generate a SHACL that validates my application profile when i'm done modeling.

## US-04 I want to modify concepts I use in Dataspecer

1. It'd be nice to have a button to link me from Dataspecer to the editor - possibly with all the vocabularies already present.
2. I want to add a new vocabulary (like wikidata, sgov, ...) to my workspace without having to start over while working on my conceptual model.
<!-- Edituji svůj model, který patchuje sgov. Teď chci přidat něco z wikidat. Wikidata přidám na můj model vedle sgov. -->
3. I want to be able to easily undo changes I've done so that I don't have to redo them manually.
4. I want to have the option to see my concepts in different views so that I can maintain the information while having it easier to visualize.
5. I want to be able to use vocabularies in all source formats as I did in Dataspecer.
