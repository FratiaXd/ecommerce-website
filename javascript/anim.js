//Navigation bar animation
function line_animate() {
    var line = document.getElementById("line");
    var width = 0;
    var int = setInterval(frame, 5);
    function frame() {
        if (width == 97) {
            clearInterval(int);
        } 
        else {
            width++; 
            line.style.width = width + '%'; 
        }
    }
}
//Navigation bar for mobile devices
function sidebarFun() {
    var x = document.getElementById("navigation");
    var y = document.getElementById("increaseHead");
    if (localStorage.fontSize == 'normal'){
        x.classList.toggle('active');
    }
    else {
        y.classList.toggle('active');
    }
}

//Color and font settings
let increase = document.getElementById("font_incr");
let deflt = document.getElementById("font_default");
let nav = document.getElementById("navigation");
let grey = document.getElementById("grey");
let beige = document.getElementById("beige");
let white = document.getElementById("white");
let headerBack = document.getElementById("headnav");

increase.addEventListener('click', increaseFont);
deflt.addEventListener('click', normalFont);
grey.addEventListener('click', makeGrey);
beige.addEventListener('click', makeBeige);
white.addEventListener('click', makeWhite);

function increaseFont() {
    nav.setAttribute('id', 'increaseHead');
    localStorage.fontSize = 'large'; 
};
if (localStorage.fontSize == 'large'){
    nav.setAttribute('id', 'increaseHead');
};

function normalFont() {
    nav.setAttribute('id', 'navigation');
    localStorage.fontSize = 'normal';
};
if (localStorage.fontSize == 'normal'){
    nav.setAttribute('id', 'navigation');
};

function makeGrey() {
    headerBack.setAttribute('id', 'greyHead');
    localStorage.color = 'grey';
};
if (localStorage.color == 'grey'){
    headerBack.setAttribute('id', 'greyHead');
};

function makeBeige() {
    headerBack.setAttribute('id', 'beigeHead');
    localStorage.color = 'beige';
};
if (localStorage.color == 'beige'){
    headerBack.setAttribute('id', 'beigeHead');
};

function makeWhite() {
    headerBack.setAttribute('id', 'whiteHead');
    localStorage.color = 'white';
};
if (localStorage.color == 'white'){
    headerBack.setAttribute('id', 'whiteHead');
};

//Zoom product image
function onClick(element, cond) {
    var elem = document.getElementById("im0");
    elem.src = element.src
    document.getElementById("modal1").style.display = "unset";
    var mar_left;
    if (cond == true){
        mar_left = 33;
        element = localStorage.num;
    }
    else {
        mar_left = -33;
        localStorage.num = element;
    }
    var int = setInterval(frame, 11);
    function frame() {
        if (cond == true) {
            if (mar_left == 100) {
                clearInterval(int);
                document.getElementById("modal1").style.display = "none";
            }
            else {
                mar_left++;
                elem.style.marginLeft = mar_left + '%';
            }
        }
        else {
            if (mar_left == 33) {
                clearInterval(int);
            } 
            else {
                mar_left++;
                elem.style.marginLeft = mar_left + '%';
            }
        }
    }
}

//Video loop
const videoLocations = ["../assets/video1.webm", "../assets/video2.webm", "../assets/video3.webm", "../assets/video4.webm"]
var videoCount = videoLocations.length;
var i = 0;
document.getElementById("show_vid").setAttribute("src",videoLocations[0]);

function playVideo(videoNum)
{
    document.getElementById("show_vid").setAttribute("src", videoLocations[videoNum]);
    document.getElementById("show_vid").load();
    document.getElementById("show_vid").play();
}

document.getElementById("show_vid").addEventListener('ended', myLoop);

function myLoop()
{
    i++;
    if (i == (videoCount))
    {
        i = 0;
        playVideo(i);
    }
    else
    {
        playVideo(i);
    }
}

//Form submission
function Message(){
    var email = document.getElementById("email").value;
    alert(email + ' successfully subscribed to our newsletter');
}
//Limit description section
