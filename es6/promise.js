/**
 * Promise - resolve
 */
// const promise = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// }

// promise()
//     .then(() => {
//         console.log('promise resolved');
//     });

/**
 * promise - reject
 */
// const promise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject();
//         }, 1000);
//     });
// }

// promise()
//     .then(() => {
//         console.log('promise resolved');
//     }).catch(() => {
//         console.log('promise rejected!!');
//     });


/**
 * Return value
 */
// const promise2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello promise");
//         }, 1000);
//     })
// }

// promise2()
//     .then((data) => {
//         console.log(data);
//     });

/**
 * Nested Promise
 */

const nestedPromise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('promise 1 resolved');
            resolve();
        }, 1000);
    })
}

const nestedPromise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('promise 2 resolved');
            resolve();
        }, 3000);
    })
}

// nestedPromise1()
//     .then(nestedPromise2)
//     .catch(() => {
//         console.log('promise rejected');
//     });

/**
 * Promise all
 */
Promise.all([nestedPromise1(), nestedPromise2()]).then(() => {
    console.log("all promises is done");
});
