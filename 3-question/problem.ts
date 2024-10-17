//create an employee obj , find out the employees by the department and there total salaries
class Employee{
    
    constructor(
        public employeeId:Number,
        public name:String,
        public email:String,
        public mobnumber:Number,
        public department:string,
        public salary:number
    )
    {}
}

const employees:Employee[]=[
    new Employee(1,"Prathyusha","prathyusha@123",87655432,"Developer",35000),
    new Employee(2,"Tarun","tarun@gmail.com",87655432,"Developer",35000),
    new Employee(3,"Priya","priya@gmail.com",87655432,"HR",50000),
    new Employee(4,"Aparna","aparna@gmail.com",87655432,"HR",80000),
    new Employee(5,"Minal","minal@gmail.com",87655432,"Developer",30000),
];

function findEmployeesByDepartment(department:string):Employee[]{
    return employees.filter(employeeDetails=> employeeDetails.department === department);
}

function calculateTotalSalaries(department: string): number {
    const filteredEmployees = findEmployeesByDepartment(department);
    return filteredEmployees.reduce((total, employee) => total + employee.salary, 0);
}

const department="Developer";
const engineeringEmployees = findEmployeesByDepartment(department);
const totalEngineeringSalaries = calculateTotalSalaries(department);

console.log(`Employees in ${department}:`, engineeringEmployees);
console.log(`Total salaries in ${department}: ${totalEngineeringSalaries}`);

