
const images=["0.jpg","1.jpg","2.jpg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

//배경화면을 html element에 넣기.(갖고 오는건 많이 했는데, 넣는건 처음임)
const bgImage=document.createElement("img"); //1. img 태그를 생성
bgImage.src=chosenImage; //2.태그의 src를 설정. 같은 파일에 있으면 됨.(해당 태그의 속성을 js에서 설정)
bgImage.style.height="100vh";
bgImage.style.width="100vw";
document.body.appendChild(bgImage); // 3. html 파일의 body에 해당 태그를 맨뒤에 추가.
//document.body.prepend(bgImage); // 3. html 파일의 body에 해당 태그를 맨앞에 추가.
console.log(bgImage);