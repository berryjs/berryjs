console.log({} === {})


console.log(Object.create({}) === Object.create({}))

console.log(Object.create({}).valueOf() === Object.create({}).valueOf())

console.log({}.valueOf() === {}.valueOf())
console.log({}.valueOf())
var a = {"a":"B"}
console.log(a.valueOf() === a)

console.log((1).valueOf() === (1).valueOf())