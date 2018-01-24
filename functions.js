var aCar = {
	owner: 'Joe Bloggs',
	address: '3 Walkers Lane',
	previous_owners: [{ name: 'Pat Smith', address: '1 Main Street' },
	{ name: 'Sheila Dwyer', address: '2 High Street' }],
	type: {
		make: 'Toyota',
		model: 'Corolla',
		cc: 1.8
	},
	features: ['Parking assist', 'Alarm', 'Tow-bar'],
	registration: { year: 10, county: 'WD', number: 1058 }
};

aCar.mileage = 80000;
aCar.color = {
	exterior: 'red',
	interior: {
		texture: 'leather',
		shade: 'cream'
	}
};

var addPreviousOwner = function (car, newName, newAddress) {
	var o = { name: newName, address: newAddress };
	car.previous_owners.push(o);
};

addPreviousOwner(aCar, 'Jim Nugent', '3 Lower Road');

var last = aCar.previous_owners.length - 1;

console.log(aCar.previous_owners[last].name);
