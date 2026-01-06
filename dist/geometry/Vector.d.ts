export default class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
    normalize(): this;
    dot(axis: Vector): number;
}
