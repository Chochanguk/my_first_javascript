const quotes=[
//10개의 명언, 작가
{ //1
    quotes:"When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
    author:"Walt Disney"
},
{ //2
    quotes:"Never say goodbye because goodbye means going away and going away means forgetting.",
    author:"Peter Pan"
},
{ //3
    quotes:"Some people are worth melting for.",
    author:"Frozen(Olaf)"
},
{ //4
    quotes:"The flower that blooms in adversity is the most rare and beautiful of all.",
    author:"Mulan"
},
{ //5
    quotes:"If you focus on what you left behind, you will never see what lies ahead.",
    author:"Ratatouille"
},
{ //6
    quotes:"The past can hurt. But from the way I see it, you can either run from it, or learn from it.",
    author:"Lion King"
},
{ //7
    quotes:"You cannot be happy every day. But there are happy things every day.",
    author:"Winnie the Pooh"
},
{ //8
    quotes:"To love someone, you have to love yourself first.",
    author:"Beauty and the Beast"
},
{ //9
    quotes:"Share your gift with the world. Who knows how many lives you are saving just by doing so.",
    author:"Kung Fu Panda"
},

{ //10
    quotes:"Venture outside your comfort zone. The rewards are worth it.",
    author:"Rapunzel"
}
]
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

//Math.floor(Math.random*10);// 0~9까지의 정수 표시(random:0~1사이,floor:내림,ceil:올림)
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quotes;
author.innerText="-"+todaysQuote.author;