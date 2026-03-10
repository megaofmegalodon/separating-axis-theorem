import Polygon from "../geometry/Polygon";
import Vector from "../geometry/Vector";
import polygonProjection from "../projections/polygonProjection";

/**
 * Uses the separating axis theorem to check whether two polygons are overlapping.
 * 
 * @param a 
 * @param b 
 * 
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */

export default function polygonCollision(a: Polygon, b: Polygon) {
    const polygons = [a, b];

    for (const polygon of polygons) {
        const worldVertices = polygon.worldVertices;

        for (let i = 0, len = worldVertices.length; i < len; i++) {
            let next = (i + 1) % len;

            const currentVertex = worldVertices[i];
            const nextVertex = worldVertices[next];

            const edgeVector = new Vector(nextVertex.x - currentVertex.x, nextVertex.y - currentVertex.y);
            const normalVector = new Vector(-edgeVector.y, edgeVector.x).normalize();

            const projA = polygonProjection(a, normalVector);
            const projB = polygonProjection(b, normalVector);

            if (projA.max < projB.min || projB.max < projA.min) {
                return false;
            }
        }
    }

    return true;
}