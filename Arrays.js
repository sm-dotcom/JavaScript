let nums = [1,2,3,4,5,6,7]

console.log (nums)

let cars = new Array('ford', 'toyota','mercedes')
console.log (cars)

console.log (cars[1])
cars[1] = 'honda'
console.log(cars[1])

console.log(cars)

cars.push('toyota')
console.log(cars)
console.log(cars.length)

let x
for (x in cars){
    console.log(cars[x])
}

console.log(cars.slice(0 , -3))
