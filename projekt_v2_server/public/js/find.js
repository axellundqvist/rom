// Hämtar värden från klickat id som ska ändras i en annan funktion, värdena skickas till inputfält.
function selectDrink(id) {

    $.getJSON("http://localhost:3000/drinks/" + id, function(data) {


    // console.log(data.Drinks[0].brand);

    $("#singledrink").html("");

    // Skapa inputelement 
    $("#singledrink").append("<h2>Uppdatera dryck</h2><form><input type='text' id='brandField' name='brand' /><input type='text' id='modelField' name='model' /><input type='text' id='countryField' name='country' /><input type='text' id='numberField' name='number' /><input type='text' id='alkoholField' name='alkohol' /><input type='text' id='volumeField' name='volume' /><input type='text' id='priceField' name='price' /><textarea id='commentField' name='comment'></textarea></form><div class='abortUpdate'><button onclick=update('" + id + "') class='knapp'>Uppdatera</button><button onclick=abortUpdate() class='knapp avbryt'>Avbryt</button></div>");
    
    // Fyll dem med rätt värde.
    $('#brandField').val($('#brandField').val() + data.Drinks[0].brand);
    $('#modelField').val($('#modelField').val() + data.Drinks[0].model);
    $('#countryField').val($('#countryField').val() + data.Drinks[0].country);
    $('#numberField').val($('#numberField').val() + data.Drinks[0].number);
    $('#alkoholField').val($('#alkoholField').val() + data.Drinks[0].alkohol);
    $('#volumeField').val($('#volumeField').val() + data.Drinks[0].volume);
    $('#priceField').val($('#priceField').val() + data.Drinks[0].price);
    $('#commentField').val($('#commentField').val() + data.Drinks[0].comment);

    });
}

// Uppdatera
function update(id) {

    // Hämta nya värden
    var brand = document.getElementById('brandField').value;
    var model = document.getElementById('modelField').value;
    var country = document.getElementById('countryField').value;
    var number = document.getElementById('numberField').value;
    var alkohol = document.getElementById('alkoholField').value;
    var volume = document.getElementById('volumeField').value;
    var price = document.getElementById('priceField').value;
    var comment = document.getElementById('commentField').value;
    

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


    // AJAX-anrop till server, PUT
    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/drinks/${id}`,
        data: package,
        success: function (data) {
            alert('Update was successfull!');
            window.location = "http://localhost:3000/";
        }
    });


}

function abortUpdate() {
    // Ladda om sidan, ändringen försvinner.
    window.location = "http://localhost:3000";
}