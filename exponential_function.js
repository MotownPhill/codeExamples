const toThePowerOf = (num, exp) => {
	const items = Array(exp).fill(num);
	const reducer = (total, currentValue) => total * currentValue;
	return items.reduce(reducer);
}