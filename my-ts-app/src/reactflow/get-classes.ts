import { Edge, MarkerType, Node } from "reactflow";

export const getInitialSetup = () => ({
  nodes: getInitialNodes(),
  edges: getInitialEdges(),
});

const getInitialNodes = () =>
  classes.map((cls, index) => ({
    id: cls.name,
    position: { x: 50 * index, y: 50 * index },
    data: { ...cls },
    type: "classCustomNode",
  }));

const classes = [
  {
    name: "dcat:Catalog",
    iri: "https://my-fake-iri.com/terms/Catalog",
    attributes: ["dcat:catalog", "dcat:dataset", "dcat:record"],
    associations: [
      "dcat:CatalogRecord",
      "dcat:Resource",
      "dcat:DataService",
      "dcat:Dataset",
    ],
  },
  {
    name: "dcat:CatalogRecord",
    iri: "https://my-fake-iri.com/terms/CatalogRecord",
    attributes: ["dcat:conformsTo", "dcat:description", "dcat:modified"],
    associations: ["dcat:Resource"],
  },
  {
    name: "dcat:Resource",
    iri: "https://my-fake-iri.com/terms/Resource",
    attributes: ["dcat:status", "dcat:versionNotes", "dcat:first"],
    associations: ["dcat:Relationship"],
  },
  {
    name: "dcat:Dataset",
    iri: "https://my-fake-iri.com/terms/Dataset",
    attributes: [
      "dcat:distribution",
      "dcat:inSeries",
      "dcat:temporal",
      "prov:wasGeneratedBy",
    ],
    associations: [
      "dcat:Distribution",
      "dcat:Resource",
      "dcat:DataService",
      "dcat:DatasetSeries",
    ],
  },
  {
    name: "dcat:DatasetSeries",
    iri: "https://my-fake-iri.com/terms/Catalog",
    attributes: ["dcat:distribution", "dcterms:temporal", "dcat:inSeries"],
    associations: ["dcat:Dataset"],
  },
  {
    name: "dcat:Distribution",
    iri: "https://my-fake-iri.com/terms/Distribution",
    attributes: [
      "dcat:accessService",
      "dcat:mediaType",
      "dcterms:description",
      "dcterms:format",
      "dcterms:license",
      "dcterms:title",
    ],
    associations: ["dcat:DataService"],
  },
  {
    name: "dcat:DataService",
    iri: "https://my-fake-iri.com/terms/Catalog",
    attributes: [
      "dcat:endpointDescription",
      "dcat:endpointUrl",
      "dcat:servesDataset",
    ],
    associations: ["dcat:Distribution", "dcat:Dataset"],
  },
  {
    name: "dcat:Relationship",
    iri: "https://my-fake-iri.com/terms/Relationship",
    attributes: ["dcat:hadRole", "dcterms:relation"],
    associations: ["dcat:Resource"],
  },
];

const edges = [
  { s: "dcat:Catalog", t: "dcat:CatalogRecord", l: "dcat:record" },
  { s: "dcat:Catalog", t: "dcat:Resource", l: "dcat:resource" },
  { s: "dcat:Catalog", t: "dcat:DataService", l: "dcat:service" },
  { s: "dcat:Catalog", t: "dcat:Dataset", l: "dcat:dataset" },
  { s: "dcat:CatalogRecord", t: "dcat:Resource", l: "foaf:primaryTopic" },
  { s: "dcat:Resource", t: "dcat:Relationship", l: "dcat:qualifiedRelation" },
  { s: "dcat:Dataset", t: "dcat:Distribution", l: "dcat:distribution" },
  { s: "dcat:Dataset", t: "dcat:Resource", l: "parent" },
  { s: "dcat:Dataset", t: "dcat:DatasetSeries", l: "dcat:inSeries" },
  { s: "dcat:DatasetSeries", t: "dcat:Dataset", l: "parent" },
  { s: "dcat:Distribution", t: "dcat:DataService", l: "dcat:accessService" },
  { s: "dcat:DataService", t: "dcat:Dataset", l: "dcat:servesDataset" },
  { s: "dcat:Relationship", t: "dcat:Resource", l: "dcterms:relation" },
];

const getInitialEdges = () =>
  edges.map(
    ({ s, t, l }) =>
      ({
        id: s + "->" + t,
        source: s,
        target: t,
        markerEnd: {
          type: MarkerType.Arrow,
        },
        type: "floating",
        data: {
          label: l,
        },
      } as Edge)
  );
