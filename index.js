const { OrderedMap } = require('immutable')

let test = OrderedMap({
	a: 10,
	b: 20,
	c: 30,
	d: 40,
});

console.log(test)

test = test.delete('b')

console.log(test)
