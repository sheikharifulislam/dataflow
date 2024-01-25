import PropTypes from "prop-types";
import { BaseEdge, EdgeLabelRenderer, getSimpleBezierPath } from "reactflow";

const EdgeForSubNode = ({ id, sourceX, sourceY, targetX, targetY }) => {
    const [path, labelX, labelY] = getSimpleBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <>
            <BaseEdge id={id} path={path} />
            <EdgeLabelRenderer>
                <button
                    style={{
                        position: "absolute",
                        transform: `translate(-45%, -50%) translate(${labelX}px, ${labelY}px)`,
                        pointerEvents: "none",
                        border: "1px solid #eee",
                        padding: "4px 10px",
                        fontSize: "14px",
                        background: "#fff",
                        borderRadius: "4px",
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M4.5 8.99998H13.5"
                            stroke="#2F9089"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 4.49998V13.5"
                            stroke="#2F9089"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </EdgeLabelRenderer>
        </>
    );
};

EdgeForSubNode.propTypes = {
    id: PropTypes.string.isRequired,
    sourceX: PropTypes.number.isRequired,
    sourceY: PropTypes.number.isRequired,
    targetX: PropTypes.number.isRequired,
    targetY: PropTypes.number.isRequired,
};

export default EdgeForSubNode;
