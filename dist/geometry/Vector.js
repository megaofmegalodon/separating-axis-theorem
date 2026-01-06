"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    normalize() {
        const magnitude = Math.hypot(this.x, this.y);
        if (magnitude === 0)
            return this;
        this.x /= magnitude;
        this.y /= magnitude;
        return this;
    }
    dot(axis) {
        return this.x * axis.x + this.y * axis.y;
    }
}
exports.default = Vector;
