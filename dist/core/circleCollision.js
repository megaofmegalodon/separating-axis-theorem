"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = circleCollision;
/**
 * Checks whether two circles are overlapping.
 *
 * This uses a simple distance comparison between the circle centers and their radii
 *
 * @param a
 * @param b
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */
function circleCollision(a, b) {
    const dx = a.center.x - b.center.x;
    const dy = a.center.y - b.center.y;
    const radius = a.radius + b.radius;
    return (dx * dx + dy * dy <= radius * radius);
}
