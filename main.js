const timer = function() {
    let date = new Date;
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    if (minutes < 10){
        minutes = "0" + minutes
    };
    if (secondes < 10){
        secondes = "0" + secondes
    };

    let affichage = heures + ":" + minutes + ":" + secondes;
    console.log(affichage);
    document.querySelector("#horloge").innerText = affichage;
}

setInterval(timer, 1000);