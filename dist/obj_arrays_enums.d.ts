declare enum Role {
    ADMIN = "ADM",
    READ_ONLY = "RO",
    AUTHOR = "AUTHOR"
}
declare const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
};
