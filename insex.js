const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
// 1
const brandIsDiesel = cars.map((car)=>{
    return{brand:car.brand, isDiesel:car.isDiesel}
});
console.log(brandIsDiesel);
// 2
const carsDiesel = cars.filter((car)=> car.isDiesel);
console.log(carsDiesel);
// 3
const carsDieselNot = cars.filter((car)=> !car.isDiesel);
console.log(carsDieselNot);
// 4
const totalPrice = cars.reduce((acc, car)=> acc + car.price,0)
console.log(totalPrice);
//5
cars.forEach((car)=>car.price *= 1.2);
console.log(cars);
//6
const allChange = cars.map((car)=>{
    return car.isDiesel==true?{brend:car.brand="Tesla", price:car.price = 25000, isDiesel:car.isDiesel= false }: car}
);

console.log(allChange);