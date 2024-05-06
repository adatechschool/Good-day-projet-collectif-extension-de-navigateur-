function currentTime() {
    var date = new Date(); 
    var dayOfWeek = date.getDay(); // Obtient le jour de la semaine (0 pour dimanche, 1 pour lundi, etc.)
    var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var day = days[dayOfWeek];

    var dayOfMonth = date.getDate(); // Obtient le jour du mois (1 à 31)
    var month = date.toLocaleString('fr-FR', { month: 'long' }); // Obtient le mois au format long (par exemple, "mai")

    var hour = date.getHours(); 
    var min = date.getMinutes(); 
    var sec = date.getSeconds(); 

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerText = day + " " + dayOfMonth + " " + month + ", " + hour + " : " + min + " : " + sec;
    
    setTimeout(currentTime, 1000); 
}

function updateTime(k) {
    return (k < 10) ? "0" + k : k;
}

currentTime(); 
