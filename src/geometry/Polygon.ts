import Vertex from "./Vertex";

export default class Polygon {
    vertices: Vertex[] = [];

    constructor(
        public center: Vertex,
        vertices?: Vertex[]
    ) {
        if (vertices) this.vertices = vertices;
    }

    addVertex(vertex: Vertex) {
        this.vertices.push(vertex);
        return this;
    }

    get worldVertices(): Vertex[] {
        return this.vertices.map(v =>
            new Vertex(
                v.x + this.center.x,
                v.y + this.center.y
            )
        );
    }

    rotate(radians: number) {
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