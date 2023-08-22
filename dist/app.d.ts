type User = {
    name: string;
    age: number;
};
declare function greet(user: User): void;
declare function isOlder(user: User, checkAge: number): boolean;
declare const u1: User;
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
declare function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor): string | number;
declare const combinedAges: string | number;
declare const combineNames: string | number;
