import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

const SubTreeNode = ({ data, isConnectable }) => {
    return (
        <div
            style={{
                width: "73px",
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
            <Handle type="source" position={Position.Bottom} id={`connector_sub_tree`} isConnectable={isConnectable} />
        </div>
    );
};

SubTreeNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string.isRequired,
        parentId: PropTypes.string.isRequired,
    }).isRequired,
    isConnectable: PropTypes.bool.isRequired,
};

export default SubTreeNode;
