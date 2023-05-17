var count = 0;
var current = "light";

function add() {
    count++;
    document.getElementById('result').innerText = count;
}

function reset() {
    count = 0;
    document.getElementById('result').innerText = count;
}

function changeTheme() {
    if (current == "light") {
        document.getElementById('bodyTag').classList.remove("light");
        document.getElementById('bodyTag').classList.add("dark");
        current = "dark";
    }
    else {
        document.getElementById('bodyTag').classList.remove("dark");
        document.getElementById('bodyTag').classList.add("light");
        current = "light";
    }
}
