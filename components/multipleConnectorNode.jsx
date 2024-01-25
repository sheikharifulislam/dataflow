import { Handle, Position } from "reactflow";
import generateSequence from "../utils/generateSequence";

const multipleConnectorNode = ({ data, isConnectable }) => {
    const sequence = generateSequence(data?.subNodes || 1, 200);
    console.log(sequence);
    return (
        <div
            style={{
                width: "200px",
                padding: "10px",
                borderRadius: "3px",
                fontSize: "12px",
                color: "#222",
                textAlign: "center",
                border: "1px solid #1a192b",
            }}
        >
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div>
                <span> {data.label} </span>
            </div>
            {sequence.map((_item, index) => {
                return (
                    <Handle
                        key={index}
                        type="source"
                        position={Position.Bottom}
                        id={`connector_${index + 1}`}
                        isConnectable={isConnectable}
                        style={{
                            left: sequence[index],
                        }}
                    />
                );
            })}
        </div>
    );
};

export default multipleConnectorNode;
