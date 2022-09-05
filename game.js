

window.onload = 
function () {
    var scores, isStart, isInMap, boundary, totalScore, scoreList;
    init();
    userName = prompt("Enter username: ");
    userNames.push(userName);
    document.getElementById("status").textContent = "Welcome " + userName + " to the challenge!";
    document.getElementById("start").addEventListener("mouseover", function () {
    document.getElementById("status").textContent = "Try not to hit the walls!";
    isStart = true;
    isInMap = true;
    gamePlaying = true;
    scores = 0;
    for (var i = 0; i < boundary.length; i++) { 
        boundary.style.backgroundColor = "#EEEEEE";
    }
});



    /********************* out of map ********************/

document.getElementById("game").addEventListener("mouseleave", function () {
    isInMap = false;
});



    /******************** boundary **********************/

for (var i = 0; i < boundary.length; i++)
    boundary[i].addEventListener("mouseover", function (event) {
        if (isStart && gamePlaying) {
            gamePlaying = false
            event.target.style.backgroundColor = "#FF0000";
            scores -= 10;
            totalScore += scores;
            document.getElementById("status").textContent = "You lost the game witha score: " + totalScore;
            isStart = false;
    }
});
for (var i = 0; i < boundary.length; i++)
    boundary[i].addEventListener("mouseleave", function (event) {
        event.target.style.backgroundColor = "#EEEEEE";
});



     /********************* end line **********************/

document.getElementById("end").addEventListener("mouseover", function () {
    if (isStart && gamePlaying) {
        if (isInMap) { 
            scores += 5;
            totalScore += scores;
            document.getElementById("status").textContent = "You win with a score of: " + totalScore;
        }
        else {
            document.getElementById("status").textContent = "No cheating, try again!";
            isStart = false;
        }
    }
    isStart = false;
});



    /*************** initiate constants and values ****************/
    
function init() {
    scores = 0;
    boundary = document.getElementsByClassName("boundary");
    isStart = false;
    isInMap = false;
    totalScore = 0;
    gamePlaying = true;
    scoreList = [];
    userNames = [];
}



};
