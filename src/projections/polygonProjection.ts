import Polygon from "../geometry/Polygon";
import Vector from "../geometry/Vector";

export default function polygonProjection(a: Polygon, axis: Vector) {
    let max = -Infinity;
    let min = Infinity;

    for (const vertex of a.worldVertices) {
        const dot = vertex.dot(axis);

        if (dot > max) max = dot;
        if (dot < min) min = dot;
    }

    return { min, max };
}