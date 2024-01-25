function generateSequence(subNodes, totalSpace) {
    if (subNodes === 1) {
        return [totalSpace / 2];
    }

    const sequence = [];
    for (let i = 0; i < subNodes; i++) {
        sequence.push((totalSpace / (subNodes - 1)) * i);
    }

    sequence[0] = 47;
    sequence[sequence.length - 1] = totalSpace - 47;

    return sequence;
}

export default generateSequence;
