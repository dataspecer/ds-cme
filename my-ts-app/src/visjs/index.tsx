import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";
import { Options } from "vis-network/declarations/index-legacy";

const VisNetwork = () => {
  const nodes = [
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
  ];

  const edges = [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 4, smooth: false },
    { from: 3, to: 3 },
  ];

  const options = {
    autoResize: true,
    width: "1000px",
    height: "700px",
    physics: {
      enabled: false,
    },
    nodes: {
      shape: "box",
      ctxRenderer: ({
        ctx,
        x,
        y,
        state: { selected, hover },
        style,
        label,
      }: any) => {
        const r = style.size;
        ctx.beginPath();
        const sides = 6;
        const a = (Math.PI * 2) / sides;
        ctx.moveTo(x, y + r);
        for (let i = 1; i < sides; i++) {
          ctx.lineTo(x + r * Math.sin(a * i), y + r * Math.cos(a * i));
        }
        ctx.closePath();
        ctx.save();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        ctx.font = "normal 12px sans-serif";
        ctx.fillStyle = "green";
      },
    },
  } as Options;

  const visJsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const network =
      visJsRef.current &&
      new Network(visJsRef.current, { nodes, edges }, options);
    // Use `network` here to configure events, etc
  }, [visJsRef, nodes, edges, options]);

  return <div ref={visJsRef} />;
};

export default VisNetwork;
