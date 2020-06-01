const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Red',
    //   age: '30',
    // });
    reject('An error happened');
  }, 1500);
});
console.log('before');
promise
  .then((data) => {
    console.log('1', data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log('after');
