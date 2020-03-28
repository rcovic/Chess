'use strict'

function searchGame() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let text = "Found game : " + xhr.response.game_uuid;
            document.getElementById("search-out").innerHTML = text;
        }
    };

    xhr.responseType = "json";
    xhr.open("GET", "/game/match/search", true);
    xhr.send();
}