// code goes here

type Admin = {
    name: string;
    privileges: string[];
};

type Employ = {
    name: string;
    startDate: Date;
};

type ElevatedEmploy = Admin & Employ;

const e1: ElevatedEmploy = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

console.log( e1.name, e1.privileges[0], e1.startDate)

type Comb = string | number;

type Numeric = number | boolean;

type Universal = Comb & Numeric;

const info: Universal = 23;

console.log(info);

function myAdd(a: number, b: number): number
function myAdd(a: string, b: string): string
function myAdd(a: Comb, b: Comb) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employ | Admin;

function printEmployInformation(emp: UnknownEmployee) {
    console.log('Name' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('StartDate: ' + emp.startDate);
    }
} 

printEmployInformation({ name: 'Many', startDate: new Date() });

class Car {
    drive() {
        console.log('Driving a car ....')
    }
}

class Truck {
    drive() {
        console.log('Driving a track ....')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10000);
    }
}

useVehicle(v1);
useVehicle(v2);

console.log(myAdd('some', 'next'))
