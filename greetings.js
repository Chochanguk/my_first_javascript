const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden"; //매크로 변수
const USERNAME_KEY="username";

function onLoginSubmit(event) //관행적으로 event라고 적음.
{
    //버튼 클릭시, 즉 페이지가 새로고침(submit되어서 새로고침시)
    event.preventDefault(); //브라우저의 기본동작을 만들어줌
    loginForm.classList.add(HIDDEN_CLASSNAME); //form을 사라지게 하는 css 추가
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username); //greeting 헤딩태그에 사용자 입력값을 보여줌.
}
//키 값을 통해 데베에 저장된 value를 불러옴.
function paintGreetings(username)
{
    greeting.innerText="Hello " + username; //헤딩 태그의 내용 수정(자바스크립트 방식)
    //form의 숨김 처리를 없애므로써 헤딩태그내용이 보임.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const saveUsername=  localStorage.getItem(USERNAME_KEY); //getItem을 통해 올림.
if (saveUsername==null) //사용자가 입력하기전이면 FORM은 그대로 보여주고
{  
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit",onLoginSubmit); //submit 동작(기본 동작)

}else{ //사용자가 입력하면 FORM은 안보이게 하고, 사용자 입력값을 보여주기(데베에값을)
    //show the greeting text
    paintGreetings(saveUsername);
} 




