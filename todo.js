//todo-list js

const toDoFrom=document.getElementById("todo-form");
const toDoInput=toDoFrom.querySelector("#todo-form input");//todo-form인 아이디를 가진 form에서 input 찾기  
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos";
let toDos=[]; //let으로 둬서 전에 썼던 데이터들은 그대로 두고, 후에 추가할수 있다.
//localstorageDB에 입력한 값 넣기
function saveToDo(event)
{
    //JSON.stringify(toDos));: 어떤 object난 array 어떠 js코드를 string으로 만듦.
    //입력한 것들은 a,b,c 이형태인데 이것을 array모양의 string으로 바꿔줌.
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    
}


//각각의 list를 삭제 하는 버튼 처리 함수
function deleteToDO(event)
{
    //event.target.parentElement.innerText: 
    //=> 이벤트의 타겟(button)의 부모요소(li)의 내부 텍스트(span)를 통해 어떤 버튼이 클릭되었는지 구분.
    const li=event.target.parentElement;
    li.remove();
    //toDos의 아이템의 id와 버튼 클릭된 list id가 일치할경우 삭제되고, 
    // 추후 데베에도 바뀐 내용으로 다시 setting.
    toDos=toDos.filter((toDo) => toDo.id != parseInt(li.id));
    saveToDo();
}

//todo-list 화면에 출력
function paintToDO(newTodo)
{
    const li=document.createElement("li"); //1.리스트 태그(li) 생성.
    li.id=newTodo.id;//리스트 오브젝트의 id를 불러옴
    const span= document.createElement("span"); //2.리스트 태그내에 넣을 span태그생성
    const button=document.createElement("button");
    button.innerText="X"; //버튼 모영
    button.addEventListener("click",deleteToDO); //버튼 클릭시 삭제 이벤트 추가!!!!!!!!!
    li.appendChild(span); //3.리스트태그에 span 태그 추가
    li.appendChild(button); //3.리스트태그에 span 태그 추가
    span.innerText=newTodo.text;//4.span태그에 list의 텍스트 입력
    toDoList.appendChild(li); //5. todolist 태그(ul)에 해당 li태그 추가
}



//사용자가 input할시,제거시 웹페이지 새로고침을 막고, 변경된 내용들처리(다시보여주고, 다시 저장)
function handleToDoSubmit(event)
{
    event.preventDefault(); //브라우저의 기본동작을 만들어줌
    const newTodo=toDoInput.value;
    toDoInput.value="";//입력창 지우기(그전에 미리입력한 값을 변수에 저장)
    //obj로 두어서 삭제시를 고려하여 id를 생성
    const newTodoObj={
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);//array에 list에 추가
    paintToDO(newTodoObj);//리스트 출력 및 삭제버튼 
    saveToDo();//사용자가 enter치면 로컬DB에 저장 및 array에 저장.
}
toDoFrom.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);


if (savedToDos!=null)d
{
    //JSON.stringify(toDos):어떤 object난 array 어떠 js코드를 string으로 만듦.!!!!!!!
    const parsedToDos=JSON.parse(savedToDos); // 위에서 만든 string을 array로 구분해줌!!!!!!
    toDos=parsedToDos;
    //forEach 메소드는 array(parsedToDos)의 각각의 요소에 각각 함수를 적용시키는 메소드.
    // A =>B : arrow function:각각의 A를 B함수에 각각 대응시킨다.
    parsedToDos.forEach(paintToDO);
}

/*배열의 filter 메소드 사용법
const arr=[1,2,3,4,5];
function sexyFilter(item)
{
    return item!=3; //3이 아닌 item들을 출력
}
//필터 메소드 안의 사용자 지정 함수를 통해서 필터링 가능.(위의=>함수와 동일한 원리)
//각각의 item에 해당 함수의 조건을 통과한 값을 새로운 배열로 할당하는게 관행적.
let newArr=[];
//1.첫번째 방식: 사용자 지정함수 사용
newArr=arr.filter(sexyFilter);
console.log(newArr); //,2,4,5 이런식으로 3을 제외하고 출력한다.
//2.두번째 방식: arrow 함수 사용으로 item=> (조건문) 형태로 작성
newArr=arr.filter(item=>item!=3);
console.log(newArr); 
*/










