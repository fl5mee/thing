function onLoad() {
    var myElement = document.getElementById("content");
    var display = "Hello, world!";
    myElement.innerHTML = display;

    const l = ["o", "o", "o", "O", "0"];
    let str = "";

    const nums = [8, 12, 16, 17, 16, 12];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i]; j++) {
            const randomIndex = Math.floor(Math.random() * l.length);
            const randomItem = l[randomIndex];
            if (randomItem == "O") {
                str += "<span style=\"color: " + "red" + ";\">" + randomItem + "</span>";
            }
            else if (randomItem == "0") {
                str += "<span style=\"color: " + "yellow" + ";\">" + randomItem + "</span>";
            }
            else if (randomItem == "o") {
                str += "<span style=\"color: " + "orange" + ";\">" + randomItem + "</span>";
            }
            else {
                str += randomItem;
            }
        }
        str += "<br>";
    }
    str += "<span style=\"color: " + "green" + ";\">" + "|/ / /\\ \\ /|<br>| \\ \\/  \\ /\\|<br>| \\/ \\ /\\ /|<br>| /\\  /\\ / \\|<br>\\—-—/" + "</span>";
    myElement.innerHTML = str;
}

window.onload = onLoad;