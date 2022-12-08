let bodyEl = document.getElementById("body");
let headerEl = document.getElementById("header");


let bgButton1 = document.getElementById("bg-button-1");
bgButton1.addEventListener("click", ()=> {
    bgButton1.style.backgroundColor = "#010165";     //#34568B
    bodyEl.style.backgroundColor = "#010165";
});

let bgButton2 = document.getElementById("bg-button-2");
bgButton2.addEventListener("click", ()=> {
    bgButton2.style.backgroundColor = "#FF6F61";
    bodyEl.style.backgroundColor = "#FF6F61";
});

let bgButton3 = document.getElementById("bg-button-3");
bgButton3.addEventListener("click", ()=> {
    bgButton3.style.backgroundColor = "#6B5B95";
    bodyEl.style.backgroundColor = "#6B5B95";
});

let bgButton4 = document.getElementById("bg-button-4");
bgButton4.addEventListener("click", ()=> {
    bgButton4.style.backgroundColor = "#88B04B";
    bodyEl.style.backgroundColor = "#88B04B";
});

let bgButton5 = document.getElementById("bg-button-5");
bgButton5.addEventListener("click", ()=> {
    bgButton5.style.backgroundColor = "#F7CAC9";
    bodyEl.style.backgroundColor = "#F7CAC9";
});

let bgButton6 = document.getElementById("bg-button-6");
bgButton6.addEventListener("click", ()=> {
    bgButton6.style.backgroundColor = "#92A8D1";
    bodyEl.style.backgroundColor = "#92A8D1";
});

let bgButton7 = document.getElementById("bg-button-7");
bgButton7.addEventListener("click", ()=> {
    bgButton7.style.backgroundColor = "#955251";
    bodyEl.style.backgroundColor = "#955251";
});

let bgButton8 = document.getElementById("bg-button-8");
bgButton8.addEventListener("click", ()=> {
    bgButton8.style.backgroundColor = "#34568B";  //#010165
    bodyEl.style.backgroundColor = "#34568B";
    bgButton8.style.color = "white";
});


let hdButton1 = document.getElementById("hd-button-1");
hdButton1.addEventListener("click", function() {
    hdButton1.style.backgroundColor = "#001f3f";
    headerEl.style.backgroundColor = "#001f3f";
});

let hdButton2 = document.getElementById("hd-button-2");
hdButton2.addEventListener("click", function() {
    hdButton2.style.backgroundColor = "#7FDBFF";
    headerEl.style.backgroundColor = "#7FDBFF";
});

let hdButton3 = document.getElementById("hd-button-3");
hdButton3.addEventListener("click", function() {
    hdButton3.style.backgroundColor = "#39CCCC";
    headerEl.style.backgroundColor = "#39CCCC";
});

let hdButton4 = document.getElementById("hd-button-4");
hdButton4.addEventListener("click", function() {
    hdButton4.style.backgroundColor = "#B10DC9";
    headerEl.style.backgroundColor = "#B10DC9";
});

let hdButton5 = document.getElementById("hd-button-5");
hdButton5.addEventListener("click", function() {
    hdButton5.style.backgroundColor = "#F012BE";
    headerE5.style.backgroundColor = "#F012BE";
});

let hdButton6 = document.getElementById("hd-button-6");
hdButton6.addEventListener("click", function() {
    hdButton6.style.backgroundColor = "#85144b";
    headerEl.style.backgroundColor = "#85144b";
});

let hdButton7 = document.getElementById("hd-button-7");
hdButton7.addEventListener("click", function() {
    hdButton7.style.backgroundColor = "#3D9970";
    headerEl.style.backgroundColor = "#3D9970";
});

let hdButton8 = document.getElementById("hd-button-8");
hdButton8.addEventListener("click", function() {
    hdButton8.style.backgroundColor = "#00ffff";
    headerEl.style.backgroundColor = "#00ffff";
});


let boxButton1 = document.getElementById("box-button-1");
boxButton1.addEventListener("click", function color1() {
    boxButton1.style.backgroundColor = "#a0d2eb";
    startButton.style.backgroundColor = "#a0d2eb";
});

let boxButton2 = document.getElementById("box-button-2");
boxButton2.addEventListener("click", function color2() {
    boxButton2.style.backgroundColor = "#e5eaf5";
    startButton.style.backgroundColor = "#e5eaf5";
});

let boxButton3 = document.getElementById("box-button-3");
boxButton3.addEventListener("click", function color3() {
    boxButton3.style.backgroundColor = "#9df9ef";
    startButton.style.backgroundColor = "#9df9ef";
});

let boxButton4 = document.getElementById("box-button-4");
boxButton4.addEventListener("click", function color4() {
    boxButton4.style.backgroundColor = "#edf756";
    startButton.style.backgroundColor = "#edf756";
});

let boxButton5 = document.getElementById("box-button-5");
boxButton5.addEventListener("click", function color5() {
    boxButton5.style.backgroundColor = "#ffa8B6";
    startButton.style.backgroundColor = "#ffa8B6";
});

let boxButton6 = document.getElementById("box-button-6");
boxButton6.addEventListener("click", function color6() {
    boxButton6.style.backgroundColor = "#f5f5f5";
    startButton.style.backgroundColor = "#f5f5f5";
});






let button = document.getElementById("first");
    
    button.addEventListener("click", event => {
        fetch("https://v2.jokeapi.dev/joke/Christmas?type=twopart")
            .then(result => result.json())
            .then(json => document.getElementById("ajax-1").innerHTML = json['setup'] + json['delivery']);
    });
    
    button.addEventListener("click", event => {
        fetch("http://numbersapi.com/random/year?json")
            .then(result => result.json())
            .then(json => document.getElementById("ajax-2").innerHTML = json['text']);
    });

    button.addEventListener("click", event => {
        fetch("http://www.boredapi.com/api/activity/")
            .then(result => result.json())
            .then(json => document.getElementById("ajax-3").innerHTML = json.activity);
    });

    button.addEventListener("click", event => {
        fetch("http://numbersapi.com/random/math?json")
            .then(result => result.json())
            .then(json => document.getElementById("ajax-4").innerHTML = json['text']);
    });