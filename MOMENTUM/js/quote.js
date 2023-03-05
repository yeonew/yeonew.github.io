const quotes = [
  {
    quote: "이렇게 웃어봐, 그러면 무서운 게 사라진단다.",
    author: "이웃집 토토로",
  },
  {
    quote: "한 번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이다.",
    author: "센과 치히로의 행방불명",
  },
  {
    quote: "키키, 그렇게 겉모습에 신경쓰지 말거라. 중요한 건 마음이야.",
    author: "마녀배달부 카키",
  },
  {
    quote: "남들과 다른 방식의 삶이란 그만큼 어려운 거다.",
    author: "귀를 기울이면",
  },
   {
    quote: "오늘이 안 되면 내일이 있다. 언제라도 내일은 있다.",
    author: "추억은 방울방울",
  },
   {
    quote: "원하는 걸 포기한다면 그것은 원하는 게 아니다.",
    author: "폼포코 너구리 대작전",
  },
];
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);
quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author