/* async/await :  Promise 를 더욱 쉽게 사용 할 수 있게 해줍니다.*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*함수를 선언 할 때 함수의 앞부분에 async 키워드를 붙여주세요.*/
/* Promise 의 앞부분에 await 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있습니다.*/
/* sleep 이라는 함수를 만들어서 파라미터로 넣어준 시간 만큼 기다리는 Promise 를 만듦*/
async function process() {
    console.log('안녕하세요!');
    await sleep(1000);    //1초 멈추고
    console.log('반갑습니다!');
}

/* 함수에서 async 를 사용하면, 해당 함수는 결과값으로 Promise 를 반환하게 됩니다.*/
process().then(() => {
    console.log('작업이 끝났어요!');
});
