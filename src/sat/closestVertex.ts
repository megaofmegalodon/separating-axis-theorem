import Polygon from "../geometry/Polygon";
import Vector from "../geometry/Vector";

export default function closestVertex(polygon: Polygon, point: Vector) {
    let closest = polygon.worldVertices[0];
    let minDistSq = Infinity;

    for (const vertex of polygon.worldVertices) {
        const dx = vertex.x - point.x;
        const dy = vertex.y - point.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < minDistSq) {
            minDistSq = distSq;
            closest = vertex;
        }
    }

    return closest;
}