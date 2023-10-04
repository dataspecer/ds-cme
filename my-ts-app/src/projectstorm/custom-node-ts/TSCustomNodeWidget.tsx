import * as React from "react";
import { DiagramEngine, PortWidget } from "@projectstorm/react-diagrams";
import { TSCustomNodeModel } from "./TSCustomNodeModel";

export interface TSCustomNodeWidgetProps {
  node: TSCustomNodeModel;
  engine: DiagramEngine;
}

export interface TSCustomNodeWidgetState {}

const SIZE = 300;

export class TSCustomNodeWidget extends React.Component<
  TSCustomNodeWidgetProps,
  TSCustomNodeWidgetState
> {
  constructor(props: TSCustomNodeWidgetProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="custom-node">
        <svg
          width={SIZE}
          height={SIZE}
          dangerouslySetInnerHTML={{
            __html:
              `
          <g id="Layer_1">
          </g>
          <g id="Layer_2">
            <polygon fill="mediumpurple" stroke="${
              this.props.node.isSelected() ? "white" : "#000000"
            }" stroke-width="3" stroke-miterlimit="10" points="10,` +
              SIZE / 2 +
              ` ` +
              SIZE / 2 +
              `,10 ` +
              (SIZE - 10) +
              `,` +
              SIZE / 2 +
              ` ` +
              SIZE / 2 +
              `,` +
              (SIZE - 10) +
              ` "/>
          </g>
        `,
          }}
        />
        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort("in")!}
        >
          <div className="circle-port" />
        </PortWidget>
        <PortWidget
          engine={this.props.engine}
          port={this.props.node.getPort("out")!}
        >
          <div className="circle-port" />
        </PortWidget>
        <div
          className="custom-node-color"
          style={{ backgroundColor: this.props.node.color }}
        />
      </div>
    );
  }
}
