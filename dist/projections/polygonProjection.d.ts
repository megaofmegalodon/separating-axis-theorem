import Polygon from "../geometry/Polygon";
import Vector from "../geometry/Vector";
export default function polygonProjection(a: Polygon, axis: Vector): {
    min: number;
    max: number;
};
