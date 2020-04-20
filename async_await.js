/* async/await :  Promise 를 더욱 쉽게 사용 할 수 있게 해줍니다.*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* 함수를 선언 할 때 함수의 앞부분에 async 키워드를 붙여주세요.*/
/* Promise 의 앞부분에 await 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있습니다.*/
/* sleep 이라는 함수를 만들어서 파라미터로 넣어준 시간 만큼 기다리는 Promise 를 만듦*/

/* async 함수에서 에러를 발생 시킬때에는 throw 를 사용하고, 에러를 잡아낼 때에는 try/catch 문을 사용합니다.*/

/* 비동기 함수를 몇개 만들어보겠습니다.*/
/* getDog 는 1초, getRabbit 은 0.5초, getTurtle 은 3초가 걸리고 있습니다.*/
/* 이 함수들을 process 함수에서 연달아서 사용하게 되면서, process 함수가 실행되는 총 시간은 4.5초가 됩니다.*/
/* 지금은 getDog -> getRabbit -> getTurtle 순서대로 실행이 되고 있는데요, 하나가 끝나야 다음 작업이 시작하고 있는데*/

/* 동시에 작업을 시작하고 싶다면,  Promise.all 을 사용해야합니다.*/

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

/* 여기서 배열 비구조화 할당 문법을 사용한다면 각 결과값을 따로 따로 추출해서 조회 할 수 있습니다.*/
async function process() {
    const [ dog, rabbit, turtle ] = await Promise.all([getDog(),getRabbit(),getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process();










