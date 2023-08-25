// const paragraph = <HTMLInputElement>document.getElementById('user-input')!;
const paragraph = document.getElementById('user-input');
if (paragraph) {
(paragraph as HTMLInputElement).value = 'Hi there!';
}

// index properties:
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character'}
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
}
console.log(errorBag)
// optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
}
console.log(fetchedUserData?.job?.title)

// nullish coalescing
const userInp = undefined;

const storedData = userInp ?? 'DEFAULT';

console.log(storedData)