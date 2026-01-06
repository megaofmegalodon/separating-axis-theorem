import Vertex from "./Vertex";
export default class Polygon {
    center: Vertex;
    vertices: Vertex[];
    constructor(center: Vertex, vertices?: Vertex[]);
    addVertex(vertex: Vertex): this;
    get worldVertices(): Vertex[];
    rotate(radians: number): this;
    clone(): Polygon;
}
