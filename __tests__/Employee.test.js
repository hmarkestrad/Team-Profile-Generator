// Constructor Employee 
const Employee = require('../lib/Employee');

// creates employee object 
test('Creates an Employee object', () => {
    const employee = new Employee('Mark', 90, 'h.mark.estrada@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('Fetches Employee Name', () => {
    const employee = new Employee('Mark', 90, 'h.mark.estrada@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Mark', 90, 'h.mark.estrada@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Mark', 90, 'h.mark.estrada@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Mark', 90, 'h.mark.estrada@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});