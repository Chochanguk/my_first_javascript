//const는 상수 처리, let은 서로 다른 변수 이름으로 새로 정의
//boolean 값은 true,false, null 3가지임.
/*
//array[]대괄호로 사용,push메소드로 인덱스 추가
const daysOfWeek=["mon","tue","wed","thu","fri","sat"];
//get item from array
console.log(daysOfWeek[4]);
//add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);*/

/*objects {} 중괄호로 사용, 구조체와 비슷하게 변수들을 정의 한다고 보는 개념
오브젝트의 정의는"="을 사용, 오브젝트 내의 변수 정의는 ":"으로 정의. 이는 key:value를 뜻함
오브젝트 밖에서 오브젝트 전체 변경은 const로 하면 변경불가하지만, 오브젝트 내의 값은 오브젝트 밖에서 수정가능

const player={
    name:"chanuk",
    points:10,
    fat:true
};
console.log(player);
player.lastName="potato"; //array와 달리 push안쓰고 밖에서 그냥 정의하면 됨.
player.points=player.points+15;
console.log(player); */
/*function, 인자에 데이터 넣기
function sayHello(nameOfPerson,age)
{
    console.log("Hello! my name is "+nameOfPerson+" my age is "+age);

}
sayHello("changuk",25);
sayHello("sunwoo",24);*/
/*함수 예제: 계산기 함수
function plus(first,second)
{
    console.log(first+second);
}
function divide(first,second)
{
    console.log(first/second);
}
plus(2,3);
divide(98,20);
*/
/* 오브젝트내에 함수 실행하기, 즉 c언어의 구조체처럼 사용
const player={
    name:"chanuk",
    sayHello: function(otherPersonName) //함수이름을 key값으로 선언
    {
        console.log("hello! "+otherPersonName+" nice to meet you");
    }
};
console.log(player.name);
player.sayHello("sunwoo"); //오브젝트 안에서 함수정의 */
/*오브젝트내의 함수들로 만드는 계산기 과제
const calculator=
{
    add: function (a,b)
    {
        return(a+b);
    },
    minus: function (a,b)
    {
        return(a-b);
    },
    divide: function (a,b)
    {
        return(a/b);
    },
    power: function (a,b)
    {
        return(a**b);
    }
};
const result=calculator.add(2,3);
console.log(result);*/

/*한국나이 계산 함수(return 값이 있는 함수 예제)
const age=96;
function calculateKrAge(ageOfForeigner)
{
   return ageOfForeigner+2;
}
const KrAge= calculateKrAge(age);
console.log(KrAge);
*/
/*prompt는 엄청 오래된 사용자 입력 방식(질문(string): 사용자 입력값(default),결국 입력값도 string으로 받음)
const age= parseInt(prompt("how old are you?"));
//parseInt는 string 타입을 number 타입으로 변경가능=> parseInt(age); */
/*조건문 사용(자바스크립트 또한 자바와 같이 위에서부터 아래로 읽음) 
if(isNaN(age)|| age<0)
{
    console.log("Please write real positive number");
}
else if(age<18)
{
    console.log("you are too young");
}
else if(age>=18 && age<=50)
{
    console.log("you can drink and your age is "+age);
}
else if(age>50 && age<=80)
{
    console.log("you should exercise");
}
else
{
    console.log("you can do whatever you want.");
}
//조건 연산자 사용도 가능
(age<18) ? console.log("18세미만"):console.log("성인");*/














































