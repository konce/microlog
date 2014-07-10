function g () {
    yield 1;
    yield 1;
    yield 1;
    yield 1;
}

var i = g();
console.log(.next());
console.log(.next());
console.log(.next());
console.log(.next());
