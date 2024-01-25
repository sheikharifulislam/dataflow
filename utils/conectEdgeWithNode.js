import EDGE_TYPE from "../constans/edgeType";

const connectNodeWithEdge = (node) => {
    const id = node.id;
    const type = EDGE_TYPE[node.id.length];
    switch (node.id.length) {
        case 1:
            return {
                id,
                source: node.id,
                target: `${parseInt(node.id) + 1}`,
                type,
            };

        case 2:
            return {
                id,
                source: node.id.slice(0, -1),
                target: node.id,
                sourceHandle: node._id,
                type,
            };

        case 3:
            return {
                id,
                source: node.id.slice(0, -1),
                target: node.id,
                type,
            };
    }
};

export default connectNodeWithEdge;
