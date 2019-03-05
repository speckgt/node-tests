var numbers = [];
for(var i = 2; i < process.argv[i]; i++) {
    numbers.push(Number(process.argv[i]));
}

console.log(numbers.reduce((sum, a) => sum + a));
