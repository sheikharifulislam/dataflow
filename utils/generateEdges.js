import connectNodeWithEdge from "./conectEdgeWithNode";

const generateEdges = (data) => {
    const edges = [];
    for (let i = 0; i < data.length; i++) {
        edges.push(connectNodeWithEdge(data[i]));
    }

    return edges;
};

export default generateEdges;
