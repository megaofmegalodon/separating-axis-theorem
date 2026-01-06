import Circle from "./geometry/Circle";
import Polygon from "./geometry/Polygon";
import Vector from "./geometry/Vector";
import polygonProjection from "./projections/polygonProjection";

/**
 * Checks whether two circles are overlapping.
 * 
 * This uses a simple distance comparison between the circle centers and their radii
 * 
 * @param a - The first circle.
 * @param b - THe second circle.
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */

export function circleCollision(a: Circle, b: Circle) {
    const dx = a.center.x - b.center.x;
    const dy = a.center.y - b.center.y;
    const radius = a.radius + b.radius;

    return (dx * dx + dy * dy <= radius * radius);
}

export function polygonCollision(a: Polygon, b: Polygon) { }

/**
 * The generic method that supports overlapping math for:
 * - Circle vs. Circle
 * - Polygon vs. Circle
 * - Polygon vs. Polygon
 * 
 * @param a - The first Polygon or Circle.
 * @param b - The second Polygon or Circle.
 * 
 * @returns Returns true when the two objects aren't touching or colliding.
 */

export default function checkCollision(a: Polygon | Circle, b: Polygon | Circle) {
    if (a instanceof Circle && b instanceof Circle)
        return circleCollision(a, b);

    if (a instanceof Polygon && b instanceof Polygon) {
        const polygons = [a, b];

        for (const polygon of polygons) {
            for (let i = 0; i < polygon.worldVertices.length; i++) {
                let next = (i + 1) % polygon.worldVertices.length;

                const currentVertex = polygon.worldVertices[i];
                const nextVertex = polygon.worldVertices[next];

                const edgeVector = new Vector(nextVertex.x - currentVertex.x, nextVertex.y - currentVertex.y);
                const normalVector = new Vector(-edgeVector.y, edgeVector.x).normalize();

                const projA = polygonProjection(a, normalVector);
                const projB = polygonProjection(b, normalVector);

                if (projA.max < projB.min || projB.max < projA.min) {
                    return true;
                }
            }
        }

        return false;
    }
}