window.onload = loadDrinks();

// Läs in drycker med AJAX
function loadDrinks() {
    $.getJSON("https://sundsvalls-rom.herokuapp.com/drinks", function(data) {

        $("#drinklista").html("");

        for(var i=0; i<data.length; i++) {
            $("#drinklista").append("<div class=\"wrapper\"><div class=\"drink\"><h2>" + data[i].brand + ", " + data[i].model + "</h2><br><p>" + data[i].country + ", " + data[i].alkohol + ", Nr: " + data[i].number + "</p></div><div class=\"spannen\"><span onclick='selectDrink(\"" + data[i]._id + "\")' id=\"pen\"><i class=\"fas fa-pen\"></i></span><span onclick='deleteDrink(\"" + data[i]._id + "\")' id='delknapp'><i class=\"far fa-trash-alt\"></i></span></div></div>");
        }
    });
}

// Radera dryck
function deleteDrink(id) {
    $.ajax({
        type: "DELETE",
        url: "https://sundsvalls-rom.herokuapp.com/drinks/delete/" + id
    }).done(function(response){
        console.log(response);

        loadDrinks();
    });
}

// Lägg till dryck
function addDrink() {

    // Hämta nya värden
    var brand = document.getElementById('brand').value;
    var model = document.getElementById('model').value;
    var country = document.getElementById('country').value;
    var number = document.getElementById('number').value;
    var alkohol = document.getElementById('alkohol').value;
    var volume = document.getElementById('volume').value;
    var price = document.getElementById('price').value;
    var comment = document.getElementById('comment').value;
    

    package = {
        brand: brand,
        model: model,
        country: country,
        number: number,
        alkohol: alkohol,
        volume: volume,
        price: price,
        comment: comment        
    };
    console.log(package);



    $.ajax({
        type: "POST",
        url: "https://sundsvalls-rom.herokuapp.com/drinks/add",
        data: package,
    }).done(function(response){
        console.log(response);

        loadDrinks();
    });
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Tid innan servern blir idle: " + minutes + ":" + seconds;

        if (--timer < 0) {
            display.textContent = "Uppdatera webbläsaren";
        }
    }, 1000);
}

window.onload = function () {
    var fiftyfive = 55,
        display = document.querySelector('#time');
    startTimer(fiftyfive, display);
};
