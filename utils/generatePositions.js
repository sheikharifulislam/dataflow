function generatePositions(currentNodeAddress) {
    switch (currentNodeAddress.length) {
        case 1:
            return {
                x: 150,
                y: parseInt(currentNodeAddress) * 150,
            };

        case 2:
            return {
                x: currentNodeAddress.at(-1) === "0" ? 150 + 10 : parseInt(currentNodeAddress.at(-1)) * 150 + 117,
                y: 380,
            };

        case 3:
            return {
                x: (currentNodeAddress.at(-1) + currentNodeAddress.at(-2)) * 300,
                y: 500,
            };
    }
}

export default generatePositions;
