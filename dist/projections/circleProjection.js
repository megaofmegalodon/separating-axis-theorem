"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = circleProjection;
function circleProjection(circle, axis) {
    const centerProjection = circle.center.dot(axis);
    return {
        min: centerProjection - circle.radius,
        max: centerProjection + circle.radius
    };
}
