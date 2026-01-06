import { describe, it, expect } from "vitest";
import { Polygon, Circle, checkCollision, Vertex } from "../src/index";

describe("SAT Collision Engine", () => {

    it("should detect circle-circle collision", () => {
        const c1 = new Circle(new Vertex(0, 0), 5);
        const c2 = new Circle(new Vertex(3, 4), 5);

        expect(checkCollision(c1, c2)).toBe(true);

        const c3 = new Circle(new Vertex(20, 20), 2);
        expect(checkCollision(c1, c3)).toBe(false);
    });

    it("should detect polygon-polygon collision", () => {
        const p1 = new Polygon(new Vertex(0, 0))
            .addVertex(new Vertex(0, 0))
            .addVertex(new Vertex(2, 0))
            .addVertex(new Vertex(1, 2));

        const p2 = new Polygon(new Vertex(1, 1))
            .addVertex(new Vertex(0, 0))
            .addVertex(new Vertex(2, 0))
            .addVertex(new Vertex(1, 2));

        expect(checkCollision(p1, p2)).toBe(true);

        const p3 = new Polygon(new Vertex(10, 10))
            .addVertex(new Vertex(0, 0))
            .addVertex(new Vertex(2, 0))
            .addVertex(new Vertex(1, 2));

        expect(checkCollision(p1, p3)).toBe(false);
    });

    it("should detect polygon-circle collision", () => {
        const poly = new Polygon(new Vertex(0, 0))
            .addVertex(new Vertex(0, 0))
            .addVertex(new Vertex(2, 0))
            .addVertex(new Vertex(1, 2));

        const circle = new Circle(new Vertex(1, 1), 0.5);
        expect(checkCollision(poly, circle)).toBe(true);

        const farCircle = new Circle(new Vertex(10, 10), 1);
        expect(checkCollision(poly, farCircle)).toBe(false);
    });
});
