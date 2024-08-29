"use strict";
const li = document.querySelectorAll("li");
const largeImg = document.querySelector("#largeImg");
li.forEach((element)=>{
    const link = element.querySelector("a");
    link.addEventListener("click", (eventOfClick)=>{
        eventOfClick.preventDefault();
        const href = link.cloneNode("href");
        largeImg.setAttribute("src", href);
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
