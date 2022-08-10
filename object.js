// const car = {
//     model: "FAW", weight: "888kg", Year: 2022,
//     color: "pearl",
//     start: function () {
//         this.drive();
//         console.log("start your car.");
//     },
//     drive: function () {
//         console.log("driving ");
//     },
// }

// console.log(car.Year);
// car.start();


// let x = 5; //literal syntax
// let x = new Number(8);
// console.log(x);

const shape = {
    radius: 10, 
    diameter() {
        return this.radius  *  2;
    }
};
console.log(shape.diameter());