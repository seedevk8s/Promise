/*Promise 는 성공 할 수도 있고, 실패 할 수도 있습니다.
성공 할 때에는 resolve 를 호출해주면 되고,
실패할 때에는 reject 를 호출해주면 됩니다.*/

/*지금 당장은 실패하는 상황은 고려하지 않고,
1초 뒤에 성공시키는 상황에 대해서만 구현을 해보겠습니다.*/

/*resolve 를 호출 할 때 특정 값을 파라미터로 넣어주면, 이 값을 작업이 끝나고 나서 사용 할 수 있습니다.
작업이 끝나고 나서 또 다른 작업을 해야 할 때에는 Promise 뒤에 .then(...) 을 붙여서 사용하면 됩니다.*/

/*이번에는, 1초뒤에 실패되게끔 해봅시다.*/
/*실패하는 상황에서는 reject 를 사용하고,
.catch 를 통하여 실패했을시 수행 할 작업을 설정 할 수 있습니다.*/
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error())
    }, 1000);
});

myPromise
    .then(n => {
        console.log(n);
    })
    .catch(error => {
        console.log(error);
    });

