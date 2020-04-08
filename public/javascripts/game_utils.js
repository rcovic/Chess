'use strict'

function searchGame() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        console.log(xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            let text = "Found game : " + xhr.response.game_uuid;
            document.getElementById("search-output").innerHTML = text;
            let ref_link = document.getElementById("ref-id"); 
            ref_link.href = "/game";
            ref_link.innerHTML = "Back to home";
        }
    };

    xhr.responseType = "json";
    xhr.open("GET", "/game/matchmaking/start", true);
    xhr.send();
}