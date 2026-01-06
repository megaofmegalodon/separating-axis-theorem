export default class Vector {
    constructor(
        public x: number,
        public y: number
    ) { }

    normalize() {
        const magnitude = Math.hypot(this.x, this.y);
        if (magnitude === 0) return this;

        this.x /= magnitude;
        this.y /= magnitude;

        return this;
    }

    dot(axis: Vector) {
        return this.x * axis.x + this.y * axis.y;
    }
}