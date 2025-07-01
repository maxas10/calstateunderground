const left = document.getElementById("left");
const right = document.getElementById("right");
const title = document.getElementById("title");
const leftContainer = document.getElementById("left-container");

function start() {
left.style.animation = "flowleft 1s both";
right.style.animation = "flowright 1s both";
title.style.animation = "disappear 1s both";
leftContainer.style.animation = "moveup 1s both"
}