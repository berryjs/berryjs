let val = 0;
let beginTime = Date.now();
for (let i = 0; i < 1000000000; i += 1) {
    val += i;
}

console.log(val)
console.log(`Time for integer ${Date.now() - beginTime}`)

beginTime = Date.now();
let val_bigint = 0n;
for (let i = 0n; i < 10000000n; i += 1n) {
    val_bigint += i;
}
console.log(val_bigint)
console.log(`Time for bigint ${Date.now() - beginTime}`)
