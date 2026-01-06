import Circle from "../geometry/Circle";
import Vector from "../geometry/Vector";
export default function circleProjection(circle: Circle, axis: Vector): {
    min: number;
    max: number;
};
