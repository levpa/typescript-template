class Department {
    protected employees: string[] = [];

    constructor(private readonly name: string) {}

    describe() {
        console.log('Department: ' + this.name);
    }

    addEmployees(...name: string[]) {
        this.employees = name;
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    private admins: string[];
    constructor(name: string, adm: string[]){
        super(name);
        this.admins = adm;
    }

    addNewEmployee(employeeName: string){
        this.employees.push(employeeName);
    }

    printAllAdmins(){
        console.log(this.admins);
    }
}

const myIT = new ITDepartment('Viktor Dep', ['first adm', 'second adm']);

myIT.addEmployees('New Employee', 'Some', 'Another', 'Sveta');

console.log(myIT);
myIT.describe();
myIT.printEmployeeInfo();

myIT.printAllAdmins();
myIT.addNewEmployee('Andrey');
