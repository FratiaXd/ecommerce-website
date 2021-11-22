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