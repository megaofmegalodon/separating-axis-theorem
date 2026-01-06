import Circle from "../geometry/Circle";
import Polygon from "../geometry/Polygon";
/**
 * Uses a variation of the seperating axis theorem to check whether
 * a polygon and a circle are overlapping.
 *
 * @param a
 * @param b
 *
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */
export default function circlePolygonCollision(a: Polygon, b: Circle): boolean;
