import React, { useEffect, useRef } from "react";
import * as joint from "jointjs";

export const Joint = () => {
  var namespace = joint.shapes;

  const jointJsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

    new joint.dia.Paper({
      el: document.getElementById("paper-hello-world"),
      model: graph,
      width: 600,
      height: 100,
      gridSize: 1,
      cellViewNamespace: namespace,
    });

    var rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: "blue",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    rect.addTo(graph);

    var rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr("label/text", "World!");
    rect2.addTo(graph);

    var link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);
  }, [jointJsRef]);

  return <div id="jointCanvas" ref={jointJsRef} />;
};
