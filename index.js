//container is html div that contains page information aka page.content
const container = document.getElementById("container");
const colorsdifficulty = ["#00ff00", "#00ff99", "#66ccff", "#ff00ff", "#ff0066", "#cc0000"];
const colors = ["#9139A6", "#10F161", "#E9243E", "#E9EB1F", "#31B4F4", "#2816A4", "#31F4DF"];
const numbers = [2,3,4,5,10];

//kertotaulut
const kertotaulu2 = [0,2,4,6,8,10,12,14,16,18,20];
const kertotaulu3 = [0,3,6,9,12,15,18,21,24,27,30];
const kertotaulu4 = [0,4,8,12,16,20,24,28,32,36,40];
const kertotaulu5 = [0,5,10,15,20,25,30,35,40,45,50];
const kertotaulu10 = [0,10,20,30,40,50,60,70,80,90,100];

//yleisiä muuttujia
let valittukertotaulu = 3;
let spinned = false;
let p1color;
let p2color;

//Create page objects for the loader
let page1 = new PageNumberSelect();
let page2 = new PageColorSelect();
let page3 = new PageMain();

//Load specific page into container, in this case first page
load(page1);