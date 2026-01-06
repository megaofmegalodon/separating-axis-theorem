"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = polygonProjection;
function polygonProjection(a, axis) {
    let max = -Infinity;
    let min = Infinity;
    for (const vertex of a.worldVertices) {
        const dot = vertex.dot(axis);
        if (dot > max)
            max = dot;
        if (dot < min)
            min = dot;
    }
    return { min, max };
}
