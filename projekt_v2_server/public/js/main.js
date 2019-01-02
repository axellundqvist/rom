window.onload = loadDrinks();

// Läs in drycker med AJAX
function loadDrinks() {
    $.getJSON("http://localhost:3000/drinks", function(data) {

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
        url: "http://localhost:3000/drinks/delete/" + id
    }).done(function(response){
        console.log(response);

        loadDrinks();
    });
}