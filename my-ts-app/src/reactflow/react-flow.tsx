import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
  Node,
} from "reactflow";

import "reactflow/dist/style.css";
import { ClassCustomNode } from "./class-custom-node";
import { getInitialSetup } from "./get-classes";
import SimpleFloatingEdge from "./simple-floating-edge";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "classCustomNode",
  },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
] as Node[];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "step" },
] as Edge[];

const { nodes: initNodes, edges: initEdges } = getInitialSetup();

export const ReactFlowPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const nodeTypes = useMemo(() => ({ classCustomNode: ClassCustomNode }), []);
  const edgeTypes = useMemo(() => ({ floating: SimpleFloatingEdge }), []);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
