
/**
 * Arrow Function
 */


// const func = () => {
//     console.log('arrow function!!');
// }

// func();

// const array = [1, 2, 3];
// array.forEach((obj, idx) => {
//     console.log(obj);
// });


console.log('\n');

const globalThis = this;

const someFunction = () => {
    console.log(this === globalThis);
}

someFunction();

console.log('\n');

