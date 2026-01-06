import circleCollision from "./circleCollision";
import circlePolygonCollision from "./circlePolygonCollision";
import Circle from "../geometry/Circle";
import Polygon from "../geometry/Polygon";
import polygonCollision from "./polygonCollision";

/**
 * The generic method that supports overlapping math for:
 * - Circle vs. Circle
 * - Polygon vs. Circle
 * - Polygon vs. Polygon
 * 
 * @param a - The first Polygon or Circle.
 * @param b - The second Polygon or Circle.
 * 
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */

export default function checkCollision(a: Polygon | Circle, b: Polygon | Circle) {
    if (a instanceof Circle && b instanceof Circle)
        return circleCollision(a, b);

    if (a instanceof Polygon && b instanceof Polygon)
        return polygonCollision(a, b);

    if (a instanceof Circle && b instanceof Polygon)
        [a, b] = [b, a];

    const polygon = a as Polygon;
    const circle = b as Circle;

    return circlePolygonCollision(polygon, circle);
}