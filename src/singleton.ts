class Employee {
  private static headCount: number = 1;
  private static instance: Employee;
    private constructor(protected name: string = '', protected age: number = 0){}
static getInstance(){
    if (Employee.instance) {
        Employee.headCount++;
        return Employee.instance;
    }
    Employee.instance = new Employee('Cool Employee', 45);

    return Employee.instance;
 }
}

console.log(Employee.getInstance())
console.log(Employee.getInstance());
console.log(Employee.getInstance());
