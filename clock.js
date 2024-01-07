/*intervals: 정해진 시간마다 함수를 실행시키는 것.(setInterval)
timeout: 일정시간이 지난후에 함수가 실행, 함수 실행을 지연시키는게 주용도(setTimeout)
      */

const clock=document.querySelector("h2#clock"); //h2태그의 id가 clock인 것을 가져옴.(이제 이 태그를 조작)
function sayHello()
{
    console.log("hello");
}
/* 매주기마다 함수 실행시키기
//setInterval이란 함수를 사용하면, 정해진 시간마다 함수를 실행시킬 수 있음.
setInterval(sayHello,5000); //첫번째 인자에 실행할 함수, 두번째 인자에 실행할 시간 간격(ms단위)
*/

/* 일정시간 후에 함수 실행시키기
//setTimeout이란 함수를 사용하면, 일정시간이 지난후에 함수가 실행됨.
setTimeout(sayHello,5000); //첫번째 인자에 실행할 함수, 두번째 인자에 실행할 시간 간격(ms단위)
*/

/* 시계 만들기*/
function getClock()
{
    const date= new Date(); //Date()는 자바스크립트에서 제공하는 날짜 함수.
    //19:12:01 형태로 시간을 표시.
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    //padStart(넣은 후의 문자열 길이,앞에서부터 채울 문자)는 string에 쓰는 함수, 만약 2글자면 그대로임.
    //padEnd(넣은 후의 문자열 길이,뒤에서부터 채울 문자)는 string에 쓰는 함수, 만약 2글자면 그대로임.
    
    clock.innerText=hours+":"+minutes+":"+seconds;
 
}
getClock(); //웹사이트를 로딩 하자마자 바로 시간을 표시함.
setInterval(getClock,1000);

















