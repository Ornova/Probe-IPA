/*
	visibility:
		0 = all Customer
		1 = all Customers and Employees
		2 = test
 */

/**
 * all restaurants
 */
export const restaurants = [
	{ id: 1, name: "Cafeteria 1", visibility: 0, statevalue: "menu1" },
	{ id: 2, name: "Cafeteria 2", visibility: 0, statevalue: "menu2" },
	{
		id: 3,
		name: "Employee Restaurant",
		visibility: 1,
		statevalue: "menu3"
	}
];
