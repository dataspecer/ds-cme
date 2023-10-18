import { Handle, Position } from "reactflow";

export const ClassCustomNode = (props: {
  data: {
    name: string;
    iri: string;
    attributes: string[];
    associations: string[];
  };
}) => {
  const { name, iri, attributes, associations } = props.data;
  return (
    <>
      <div className="m-1 bg-white border border-black [&]:text-sm">
        <h1 className=" overflow-x-hidden whitespace-nowrap border border-b-black">
          {name}
        </h1>

        <p className="overflow-x-clip">{iri}</p>
        <p
          title="log attributes of class to console"
          onClick={() => console.log(attributes)}
        >
          attrs: {attributes.length}
          <ul>
            {attributes.map((attr) => (
              <li>{attr}</li>
            ))}
          </ul>
        </p>
        <button
          className="text-slate-500"
          onClick={() => alert("FIXME: editing class")}
        >
          edit
        </button>
      </div>

      <Handle type="source" position={Position.Top} id="sa" />
      <Handle type="source" position={Position.Right} id="sb" />
      <Handle type="source" position={Position.Bottom} id="sc" />
      <Handle type="source" position={Position.Left} id="sd" />
      <Handle type="target" position={Position.Top} id="ta" />
      <Handle type="target" position={Position.Right} id="tb" />
      <Handle type="target" position={Position.Bottom} id="tc" />
      <Handle type="target" position={Position.Left} id="td" />
    </>
  );
};
