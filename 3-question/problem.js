var Employee = /** @class */ (function () {
    function Employee(employeeId, name, email, mobnumber, department, salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.email = email;
        this.mobnumber = mobnumber;
        this.department = department;
        this.salary = salary;
    }
    return Employee;
}());
var employees = [
    new Employee(1, "Prathyusha", "prathyusha@123", 87655432, "Developer", 35000),
    new Employee(2, "Tarun", "tarun@gmail.com", 87655432, "Developer", 35000),
    new Employee(3, "Priya", "priya@gmail.com", 87655432, "HR", 50000),
    new Employee(4, "Aparna", "aparna@gmail.com", 87655432, "HR", 80000),
    new Employee(5, "Minal", "minal@gmail.com", 87655432, "Developer", 30000),
];
function findEmployeesByDepartment(department) {
    return employees.filter(function (employeeDetails) { return employeeDetails.department === department; });
}
function calculateTotalSalaries(department) {
    var filteredEmployees = findEmployeesByDepartment(department);
    return filteredEmployees.reduce(function (total, employee) { return total + employee.salary; }, 0);
}
var department = "Developer";
var engineeringEmployees = findEmployeesByDepartment(department);
var totalEngineeringSalaries = calculateTotalSalaries(department);
console.log("Employees in ".concat(department, ":"), engineeringEmployees);
console.log("Total salaries in ".concat(department, ": ").concat(totalEngineeringSalaries));
