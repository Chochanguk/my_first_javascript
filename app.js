//const는 상수 처리, let은 서로 다른 변수 이름으로 새로 정의
//boolean 값은 true,false, null 3가지임.
/*<자바스크립트의 배열>
//array[]대괄호로 사용,push메소드로 인덱스 추가
const daysOfWeek=["mon","tue","wed","thu","fri","sat"];
//get item from array
console.log(daysOfWeek[4]);
//add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);*/


/*<자바스크립트의 객체>
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



/*<자바스크립트의 함수>
//function, 인자에 데이터 넣기
function sayHello(nameOfPerson,age)
{
    console.log("Hello! my name is "+nameOfPerson+" my age is "+age);

}
sayHello("changuk",25);
sayHello("sunwoo",24);
// 함수 예제: 계산기 함수
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

/*<자바스크립트의 조건문>
//한국나이 계산 함수(return 값이 있는 함수 예제)
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
/*<자바스크립트에서 html검색하는 법>
//dir은 태그의 내용을 log보다 좀더 자세하게 볼수 있다.(이벤트,style 등등)
//자바 스크립트는 html의 element를 가지고 와서 볼수 있고,이는 객체로써 조작 가능하다.(자바스크립트의 역할)
//이러한 html의 조작은 document라는 object를 통해 얻을수 있다.(밑은 사용 예시코드)

const title = document.getElementById("title"); //제일 중요(id로 html의 element를 불러옴)
title.innerText="Got you!"
console.log(title.id);
console.log(title.className);

//클래스네임으로 html element 불러오기
const hellos = document.getElementsByClassName("hello");//제일 중요(className으로 html의 element를 불러옴)
console.log(hellos);

//태그 네임으로 html element 불러오기(array형식으로 갖고오는거임)
//const title = document.getElementsByTagName("h1");
//css방식으로 검색하는 방법!!!!위와 비슷하지만, class내의 h1태그를 객체로써 할당.
//array로 할당한거라 만약 중복된 class존재시 arr[0]..(첫번째 주소)만 불러옴. 객체에 모두 할당시 querySelectorAll 메소드 사용
//querySelector메소드로 검색.(클래스에 순차 id부여 하는 법->(".hello:first-child h1")여기서 id는 first-child)
const title = document.querySelector(".hello h1"); //이건 위의 3가지 방식 모두 가능(class,id,태그네임 검색)
console.log(title);

const title = document.querySelector("div.hello:first-child h1");
console.dir(title);
//title.style.color="blue"; //태그의 컬러를 바꿈
*/
/* <자바스크립트 이벤트> 
//1. html 태그를 받을 객체 생성
//2. 객체.addEventListener("이벤트", 처리함수), 이때 이벤트는 on~~메소드에서 on만 제외하면 됨.
//3. 이벤트 발생시 처리 함수 생성
//이벤트를 찾고 싶으면(console.dir에서 찾으셈)

const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);
function handleh1Click()
{
    console.log("h1 was clicked!");
    h1.style.color="blue"; //태그의 컬러를 바꿈
}
function handleh1DoubleClick()
{
    console.log("h1 was Double clicked!");
    h1.style.color="red"; //태그의 컬러를 바꿈
}
function handleMouseEnter()
{
    h1.innerText="Mouse is here";
}
function handleMouseLeave()
{
    h1.innerText="Mouse is gone";
}
function handleWindowResize()
{
    document.body.style.backgroundColor="tomato"; //h1태그와 달리 전체 문서 조작
}
function handleWindowCopy()
{
    alert("copier!");
}
function handleWindowOffline()
{
    alert("인터넷 연결 되어 있지 않습니다!");
}
function handleWindowOnline()
{
    alert("인터넷이 다시 연결되었습니다.");
}
h1.addEventListener("click",handleh1Click); //"x"이벤트 발생시, 함수가 해당 이벤트 처리(handle)
h1.addEventListener("mouseenter",handleMouseEnter); //객체 위에 마우스가 올라가기만 하면 이벤트 발생
h1.addEventListener("mouseleave",handleMouseLeave); //객체 위에서 마우스가 나가면 이벤트 발생
//위와 같은 기능이지만 이게 더 간편함. 하지만 기능적인 측면에서 보면 위에 거가 더 편리함.
h1.ondblclick=handleh1DoubleClick; //더블클릭시, 함수가 해당 이벤트 처리(handle)
//window (창 조작 객체)
window.addEventListener("resize",handleWindowResize); //창크기 변경시 이벤트 발생(resize)
window.addEventListener("copy",handleWindowCopy); //ctrl+c,우클릭 복사 시 이벤트 발생
window.addEventListener("offline",handleWindowOffline); //인터넷 연결해제시 발생
window.addEventListener("online",handleWindowOnline); //인터넷 다시 연길시 발생
//이벤트 발생 후 다른 이벤트 발생시처리
const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);
function handleh1Click()
{
    const currentColor=h1.style.color;
    let newColor;
    if(currentColor=="blue")
    {
        newColor="tomato"; //태그의 컬러를 바꿈
    }
    else
    {
        newColor="blue"; //태그의 컬러를 바꿈
    }
    h1.style.color=newColor;
}
h1.addEventListener("click",handleh1Click);
*/
/*<css in 자바스크립트>

const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);
function handleh1Click()
{
    //h1.className="active"; //클릭스 css클래스네임에 해당하는 css가 작동
    //className을 업데이트 함으로써 해당 css로 변경
    const clickedClass="clicked"; //이렇게 css이름으로 정의해서 사용하는게 오류가 덜남.
    if(h1.className==clickedClass)
    {
        h1.className="";
    }
    else{
        h1.className=clickedClass;
    }

}
h1.addEventListener("click",handleh1Click);
//위에서는 기존의 class name을 없애버리고 완전히 새로 교체해버림. 
//따라서 classlList 메소드로 class를 조작하여 완전 교체를 방지.( remove,add 메소드 사용)
const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);
function handleh1Click()
{
    const clickedClass="clicked"; 
    //h1.classList.contains(clickedClass)=> 해당 클래스를 포함하는지만 확인
    if(h1.classList.contains(clickedClass))
    {
        h1.classList.remove(clickedClass); //class에서 "clicked"클래스는 삭제
    }
    else{
        h1.classList.add(clickedClass); //class에서 "clicked"클래스 추가
    }

}
h1.addEventListener("click",handleh1Click);
*/
//classlList 메소드의 toggle 사용.(class가 존재하면 삭제, 없으면 추가하는 메소드)
//!!! toggle의 사용 예: 휴대폰이 꺼져 있으면 버튼 클릭시 휴대폰 turn on
const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);
function handleh1Click()
{
    //toggle 메소드는 class가 존재하면 삭제, 없으면 추가하는 메소드.(0->1; 1->0으로 바꿈)
    h1.classList.toggle("clicked");
}
h1.addEventListener("click",handleh1Click);





















































































































