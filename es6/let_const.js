
/**
 * let & const
 */

// var hello = 'hello';

// let num = 100;
// const constant = 'es6';

// hello = 'world';
// num = 200;

// // Error!
// constant = '222';

/**
 * ESLint와 같은 linting tool을 쓴다면
 * 재할당을 하지않는 모든 변수는 const로 선언하는것을 권장함! (방어적인 코딩)
 */

/**
 * let & var block scope
 */

let let_variable = 'global';
var var_variable = 'global';

const condition = true;

if (condition) {

    let let_variable = 'local';
    var var_variable = 'local';

}

console.log('\n');
console.log(`let variable: ${let_variable}`);
console.log(`var variable: ${var_variable}`);
console.log('\n');



