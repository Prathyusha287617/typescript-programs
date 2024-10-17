//create employee obejct with the field employeeId, name, email with all datatypes included in it

interface Employee{
    employeeId:Number;
    name:string;
    email:string;
    isActive:boolean;
    dateOfJoining:Date;
    skills:string[];
    salary:number;
    department:string | null;
}

const employee : Employee={
    employeeId:1,
    name:"Prathyusha",
    email:"prathyusha@gmail.com",
    isActive:true,
    dateOfJoining:new Date("2024-09-23"),
    skills:["a","b","c"],
    salary:35000,
    department:"it"
}

console.log(employee);