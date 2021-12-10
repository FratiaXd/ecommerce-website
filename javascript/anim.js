//Navigation bar animation
function line_animate() {
    var line = document.getElementById("line");
    var width = 0;
    var int = setInterval(frame, 5);
    function frame() {
        if (width == 98) {
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
    x.classList.toggle('active')
}

//Color and font settings

//Zoom product image
function onClick(element) {
    document.getElementById("im0").src = element.src;
    document.getElementById("modal1").style.display = "block";
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