const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "rgb(25,67,78)";

      break;
    case "tarus":
      body.style.backgroundColor = "rgb(78,69,89)";
      break;
    case "gemini":
      body.style.backgroundColor = "grey";
      break;
    case "cancer":
      body.style.backgroundColor = "pink";
      break;
    case "leo":
      body.style.backgroundColor = "blue";
      break;
    case "virgo":
      body.style.backgroundColor = "red";
      break;
    case "libra":
      body.style.backgroundColor = "green";
      break;
    case "scorpio":
      body.style.backgroundColor = "brown";
      break;
    case "aquarius":
      body.style.backgroundColor = "rgb(123,43,234)";
      break;
    case "capricorn":
      body.style.backgroundColor = "rgb(123,245,100)";
      break;
    case "pisces":
      body.style.backgroundColor = "rgb(200,200,50)";
      break;
    default:
      body.style.backgroundColor = "rgb(12,12,250)";
      break;
  }
};
