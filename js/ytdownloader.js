function scarica() {
    var ytlink = document.getElementById("txtinput").value;
    var link = "https://loader.to/api/button/?url="+ ytlink +"&f=mp3&color=64c896"
    console.log(link);
    //window.location.replace(link);
    if(document.getElementById("format").value == "mp4 360p") {
        var link = "https://loader.to/api/button/?url="+ ytlink +"&f=360&color=64c896"
        window.location.replace(link);

    }
    if(document.getElementById("format").value == "mp4 720p") {
        var link = "https://loader.to/api/button/?url="+ ytlink +"&f=720&color=64c896"
        window.location.replace(link);

    }
    if(document.getElementById("format").value == "mp4 1080p") {
        var link = "https://loader.to/api/button/?url="+ ytlink +"&f=1080&color=64c896"
        window.location.replace(link);

    }
    if(document.getElementById("format").value == "mp4 4K") {
        var link = "https://loader.to/api/button/?url="+ ytlink +"&f=4k&color=64c896"
        window.location.replace(link);

    }
    if(document.getElementById("format").value == "mp3") {
        var link = "https://loader.to/api/button/?url="+ ytlink +"&f=mp3&color=64c896"
        window.location.replace(link);

    }
    if(document.getElementById("format").value == "OGG") {
        var link = "https://loader.to/api/button/?url="+ ytlink +"&f=ogg&color=64c896"
        window.location.replace(link);

    }
    if(document.getElementById("format").value == "WAV") {
        var link = "https://loader.to/api/button/?url="+ ytlink +"&f=wav&color=64c896"
        window.location.replace(link);

    }

}



