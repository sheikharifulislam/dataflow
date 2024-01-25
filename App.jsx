import ReactFlow, { useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import EdgeForSubNode from "./components/EdgeForSubNode";
import EdgeWithButton from "./components/EdgeWithButton";
import SubTreeNode from "./components/SubTreeNode";
import multipleConnectorNode from "./components/multipleConnectorNode";
import initialData from "./data";
import generateEdges from "./utils/generateEdges";
import generateNodes from "./utils/generateNodes";
const App = () => {
    const [nodes] = useNodesState(generateNodes(initialData));
    const [edges] = useEdgesState(generateEdges(nodes));

    const edgeTypes = {
        edgeWithBtn: EdgeWithButton,
        subNodeEdge: EdgeForSubNode,
    };

    const nodeTypes = { multipleConnector: multipleConnectorNode, subTree: SubTreeNode };

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
            }}
        >
            <ReactFlow nodes={nodes} edges={edges} edgeTypes={edgeTypes} nodeTypes={nodeTypes} />
        </div>
    );
};

export default App;
