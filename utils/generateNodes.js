import generatePositions from "./generatePositions";

let x = 150;
let y = 0;

const generateNodes = (data, result = [], nodeAddress = "") => {
    for (let i = 0; i < data.length; i++) {
        const currentNodeAddress = nodeAddress.concat(i);
        nodeAddress.concat(i);

        const positions = generatePositions(currentNodeAddress);

        x = positions.x;
        y = positions.y;

        const node = {
            id: currentNodeAddress,
            data: {
                label: data[i].title,
            },
            type: currentNodeAddress.length === 2 ? "subTree" : "multipleConnector",
            position: {
                x,
                y,
            },
        };

        if (data[i].child) {
            const updatedNode = {
                ...node,
                subNodes: data[i].child.length,
            };
            result.push(updatedNode);
            generateNodes(data[i].child, result, currentNodeAddress);
        } else {
            result.push(node);
        }
    }

    return result;
};

export default generateNodes;
