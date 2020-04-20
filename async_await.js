/* async/await :  Promise 를 더욱 쉽게 사용 할 수 있게 해줍니다.*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/* 비동기 함수를 몇개 만들어보겠습니다.*/
/* 함수를 선언 할 때 함수의 앞부분에 async 키워드를 붙여주세요.*/
/* Promise 의 앞부분에 await 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있습니다.*/
/* sleep 이라는 함수를 만들어서 파라미터로 넣어준 시간 만큼 기다리는 Promise 를 만듦*/

/* async 함수에서 에러를 발생 시킬때에는 throw 를 사용하고, 에러를 잡아낼 때에는 try/catch 문을 사용합니다.*/

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
  await sleep(500);
  return '토끼';
};

const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};


async function process() {
    const dog = await getDog();
    console.log(dog);

    const rabbit = await getRabbit();
    console.log(rabbit);

    const turtle = await getTurtle();
    console.log(turtle);
}

process();










