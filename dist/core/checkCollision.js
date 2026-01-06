"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkCollision;
const circleCollision_1 = __importDefault(require("./circleCollision"));
const circlePolygonCollision_1 = __importDefault(require("./circlePolygonCollision"));
const Circle_1 = __importDefault(require("../geometry/Circle"));
const Polygon_1 = __importDefault(require("../geometry/Polygon"));
const polygonCollision_1 = __importDefault(require("./polygonCollision"));
/**
 * The generic method that supports overlapping math for:
 * - Circle vs. Circle
 * - Polygon vs. Circle
 * - Polygon vs. Polygon
 *
 * @param a - The first Polygon or Circle.
 * @param b - The second Polygon or Circle.
 *
 * @returns `true` if the objects are overlapping, `false` otherwise.
 */
function checkCollision(a, b) {
    if (a instanceof Circle_1.default && b instanceof Circle_1.default)
        return (0, circleCollision_1.default)(a, b);
    if (a instanceof Polygon_1.default && b instanceof Polygon_1.default)
        return (0, polygonCollision_1.default)(a, b);
    if (a instanceof Circle_1.default && b instanceof Polygon_1.default)
        [a, b] = [b, a];
    const polygon = a;
    const circle = b;
    return (0, circlePolygonCollision_1.default)(polygon, circle);
}
