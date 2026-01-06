"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vertex_1 = __importDefault(require("./Vertex"));
class Polygon {
    center;
    vertices = [];
    constructor(center, vertices) {
        this.center = center;
        if (vertices)
            this.vertices = vertices;
    }
    addVertex(vertex) {
        this.vertices.push(vertex);
        return this;
    }
    get worldVertices() {
        return this.vertices.map(v => new Vertex_1.default(v.x + this.center.x, v.y + this.center.y));
    }
    rotate(radians) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        for (const vertex of this.vertices) {
            const x = vertex.x;
            const y = vertex.y;
            vertex.x = x * cos - y * sin;
            vertex.y = x * sin + y * cos;
        }
        return this;
    }
    clone() {
        return new Polygon(this.center);
    }
}
exports.default = Polygon;
