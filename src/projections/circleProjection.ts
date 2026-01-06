import Circle from "../geometry/Circle";
import Vector from "../geometry/Vector";

export default function circleProjection(circle: Circle, axis: Vector) {
    const centerProjection = circle.center.dot(axis);

    return {
        min: centerProjection - circle.radius,
        max: centerProjection + circle.radius
    };
}