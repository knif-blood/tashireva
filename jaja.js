
let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "Aries""Taurus""Gemini""Cancer""Leo""Virgo""Libra""scorpio""Sagittarius""Capricorn""Aquarius""Pisces") {
  alert("Wow! I'm a Scorpio too!""Wow! I'm a Aries too!""Wow! I'm a Taurus too!""Wow! I'm a Gemini too!""Wow! I'm a Cancer too!""Wow! I'm a Leo too!""Wow! I'm a Virgo too!""Wow! I'm a Libra too!""Wow! I'm a Sagittarius too!""Wow! I'm a Capricorn too!""Wow! I'm a Aquarius too!""Wow! I'm a Pisces too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("What is you name?", "Polina""Elena""George""Nastya""Alice""Timur""Eva""Marianna""Natalya""Sveta""Oleg"); // open the window with Text "Are you feeling lucky" and default value "Polina""Elena""George""Nastya""Alice""Timur""Eva""Marianna""Natalya""Sveta""Oleg"


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("demo").innerHTML = "Привет, " + sign;
});
