"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = polygonCollision;
const Vector_1 = __importDefault(require("../geometry/Vector"));
const polygonProjection_1 = __importDefault(require("../projections/polygonProjection"));
/**
 * Uses the seperating axis theorem to check whether two polygons are overlapping.
 *
 * @param a
 * @param b
 *
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */
function polygonCollision(a, b) {
    const polygons = [a, b];
    for (const polygon of polygons) {
        for (let i = 0; i < polygon.worldVertices.length; i++) {
            let next = (i + 1) % polygon.worldVertices.length;
            const currentVertex = polygon.worldVertices[i];
            const nextVertex = polygon.worldVertices[next];
            const edgeVector = new Vector_1.default(nextVertex.x - currentVertex.x, nextVertex.y - currentVertex.y);
            const normalVector = new Vector_1.default(-edgeVector.y, edgeVector.x).normalize();
            const projA = (0, polygonProjection_1.default)(a, normalVector);
            const projB = (0, polygonProjection_1.default)(b, normalVector);
            if (projA.max < projB.min || projB.max < projA.min) {
                return false;
            }
        }
    }
    return true;
}
