// const hex = (r, g, b) => {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// const rgb = (r, g, b) => {
//     return `rgb(${r}, ${g}, ${b})`;
// };
// ! simple concept of factory function
function convertColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const {r, g, b} = this;
        return `rgb(${r}, ${b}, ${b})`;
    };
    color.hex = function () {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
};
// ! simple copcept of constructor
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = function () {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}. ${b})`;
}