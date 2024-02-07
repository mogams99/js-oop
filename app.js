// const hex = (r, g, b) => {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// const rgb = (r, g, b) => {
//     return `rgb(${r}, ${g}, ${b})`;
// };
// ! simple concept of factory function
// function convertColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${b}, ${b})`;
//     };
//     color.hex = function () {
//         const {r, g, b} = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     };
//     return color;
// };
// ! simple copcept of constructor
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Color.prototype.rgb = function () {
//     const {
//         r,
//         g,
//         b
//     } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }
// Color.prototype.hex = function () {
//     const {
//         r,
//         g,
//         b
//     } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// Color.prototype.rgba = function (a = 1.0) {
//     const {
//         r,
//         g,
//         b
//     } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }
// ! simple concept of object class contains constructor and method
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        console.warn('Constructor process has worked!');
    }
    innerRgb() {
        const {
            r,
            g,
            b
        } = this;
        return `${r}, ${g}, ${b}`;
    }
    colorName() {
        console.warn(`Color name is ${this.name}`);
    }
    rgb() {
        return `rgb(${this.innerRgb()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRgb()}, ${a})`;
    }
    hex() {
        const {
            r,
            g,
            b
        } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}