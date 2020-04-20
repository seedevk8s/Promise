function increaseAndPrint(n) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

/*Promise 를 사용하면, 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지 않게 됩니다.*/
/*이것도 불편한점이 있긴 합니다.
에러를 잡을 때 몇번째에서 발생했는지 알아내기도 어렵고
특정 조건에 따라 분기를 나누는 작업도 어렵고,
특정 값을 공유해가면서 작업을 처리하기도 까다롭습니다.*/
increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
        console.error(e);
    });
