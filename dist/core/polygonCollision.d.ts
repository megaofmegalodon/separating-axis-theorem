import Polygon from "../geometry/Polygon";
/**
 * Uses the seperating axis theorem to check whether two polygons are overlapping.
 *
 * @param a
 * @param b
 *
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */
export default function polygonCollision(a: Polygon, b: Polygon): boolean;
