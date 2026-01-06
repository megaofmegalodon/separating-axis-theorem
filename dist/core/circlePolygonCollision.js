"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = circlePolygonCollision;
const Vector_1 = __importDefault(require("../geometry/Vector"));
const circleProjection_1 = __importDefault(require("../projections/circleProjection"));
const polygonProjection_1 = __importDefault(require("../projections/polygonProjection"));
const closestVertex_1 = __importDefault(require("../sat/closestVertex"));
/**
 * Uses a variation of the seperating axis theorem to check whether
 * a polygon and a circle are overlapping.
 *
 * @param a
 * @param b
 *
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */
function circlePolygonCollision(a, b) {
    for (let i = 0; i < a.worldVertices.length; i++) {
        let next = (i + 1) % a.worldVertices.length;
        const currentVertex = a.worldVertices[i];
        const nextVertex = a.worldVertices[next];
        const edgeVector = new Vector_1.default(nextVertex.x - currentVertex.x, nextVertex.y - currentVertex.y);
        const normalVector = new Vector_1.default(-edgeVector.y, edgeVector.x).normalize();
        const projA = (0, polygonProjection_1.default)(a, normalVector);
        const projB = (0, circleProjection_1.default)(b, normalVector);
        if (projA.max < projB.min || projB.max < projA.min) {
            return false;
        }
    }
    const vertex = (0, closestVertex_1.default)(a, b.center);
    const axis = new Vector_1.default(vertex.x - b.center.x, vertex.y - b.center.y).normalize();
    const projA = (0, polygonProjection_1.default)(a, axis);
    const projB = (0, circleProjection_1.default)(b, axis);
    if (projA.max < projB.min || projB.max < projA.min) {
        return false;
    }
    return true;
}
