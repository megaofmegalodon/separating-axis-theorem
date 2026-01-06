import Circle from "../geometry/Circle";
import Polygon from "../geometry/Polygon";
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
export default function checkCollision(a: Polygon | Circle, b: Polygon | Circle): boolean;
