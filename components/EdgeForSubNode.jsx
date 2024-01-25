import { BaseEdge, EdgeLabelRenderer, getSimpleBezierPath, useReactFlow } from "reactflow";

const EdgeForSubNode = ({ id, sourceX, sourceY, targetX, targetY }) => {
    const { setEdges } = useReactFlow();
    const [path, labelX, labelY, offsetX, offsetY] = getSimpleBezierPath({
        sourceX,
        sourceY,
        // sourcePosition: Position.Top,
        targetX,
        targetY,
        // targetPosition: Position.Bottom,
    });

    console.log({ path, labelX, labelY, offsetX, offsetY, sourceX, targetX, targetY, sourceY });

    return (
        <>
            <BaseEdge id={id} path={path} />
            <EdgeLabelRenderer>
                {/* <div
                    style={{
                        position: "absolute",
                        transform: `translate(-55%, -50%) translate(${
                            labelX > targetX ? labelX + 40 : labelX - 40
                        }px, ${labelY - 35}px)`,
                        pointerEvents: "none",
                        backgroundColor: "#fff",
                        border: "1px solid #eee",
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "4px",
                    }}
                >
                    Sub tree
                </div> */}
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

export default EdgeForSubNode;
