import Circle from "../geometry/Circle";

/**
 * Checks whether two circles are overlapping.
 * 
 * This uses a simple distance comparison between the circle centers and their radii
 * 
 * @param a 
 * @param b 
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */

export default function circleCollision(a: Circle, b: Circle) {
    const dx = a.center.x - b.center.x;
    const dy = a.center.y - b.center.y;
    const radius = a.radius + b.radius;

    return (dx * dx + dy * dy <= radius * radius);
}