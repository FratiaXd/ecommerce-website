//Navigation bar animation
function line_animate() {
    var line = document.getElementById("line");
    var width = 0;
    var int = setInterval(frame, 5);
    function frame() {
        if (width == 98) {
            clearInterval(int);
        } else {
            width++; 
            line.style.width = width + '%'; 
        }
    }
}
//Zoom product image


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